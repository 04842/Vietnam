// src/pages/trip-planner.tsx

import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import DestinationSelector from '../components/DestinationSelector'
import DateRangePicker from '../components/DateRangePicker'
import ItineraryGenerator from '../components/ItineraryGenerator'
import ItineraryEditor from '../components/ItineraryEditor'
import BudgetCalculator from '../components/BudgetCalculator'
import { syncToGoogleCalendar, syncToAppleCalendar } from '../utils/calendarSync'
import { graphql, useStaticQuery } from 'gatsby'


interface TripPlannerPageProps {
  data: {
    allDestinations: {
      nodes: Array<{
        id: string
        name: string
        slug: string
      }>
    }
  }
}

const TripPlannerPage: React.FC<TripPlannerPageProps> = ({ data }) => {
  const [selectedDestination, setSelectedDestination] = useState('')
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null })
  const [itinerary, setItinerary] = useState(null)

  const handleGenerateItinerary = () => {
    // 這裡將來需要實現行程生成邏輯
    // 現在我們只是設置一個模擬的行程
    setItinerary({
      days: [
        { day: 1, activities: ['到達並入住酒店', '附近散步'] },
        { day: 2, activities: ['參觀主要景點', '品嚐當地美食'] },
        { day: 3, activities: ['自由活動', '離開'] },
      ]
    })
  }

  return (
    <Layout>
      <SEO title="行程規劃器" description="規劃您的完美旅程" />
      <h1>行程規劃器</h1>
      <DestinationSelector
        destinations={data.allDestinations.nodes}
        onSelect={setSelectedDestination}
      />
      <DateRangePicker onChange={setDateRange} />
      <button onClick={handleGenerateItinerary}>生成行程</button>
      {itinerary && (
        <>
          <ItineraryEditor itinerary={itinerary} onChange={setItinerary} />
          <BudgetCalculator itinerary={itinerary} destination={selectedDestination} />
        </>
      )}
    </Layout>
  )
}

export default TripPlannerPage

export const query = graphql`
  query {
    allDestinations {
      nodes {
        id
        name
        slug
      }
    }
  }
`