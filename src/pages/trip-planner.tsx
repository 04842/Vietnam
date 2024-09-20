// src/pages/trip-planner.tsx

import React, { useState } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import DestinationSelector from '../components/DestinationSelector'
import DateRangePicker from '../components/DateRangePicker'
import ItineraryEditor from '../components/ItineraryEditor'
import BudgetCalculator from '../components/BudgetCalculator'

interface Destination {
  id: string
  name: string
  slug: string
}

interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

interface ItineraryDay {
  day: number
  activities: string[]
}

interface Itinerary {
  days: ItineraryDay[]
}

interface TripPlannerPageData {
  allDestination: {
    nodes: Destination[]
  }
}

const TripPlannerPage: React.FC<PageProps<TripPlannerPageData>> = ({ data }) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('')
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: null, endDate: null })
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)

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
        destinations={data.allDestination.nodes}
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
    allDestination {
      nodes {
        id
        name
        slug
      }
    }
  }
`