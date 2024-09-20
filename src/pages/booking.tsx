// src/pages/booking.tsx

import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FlightSearch from '../components/booking/FlightSearch'
import HotelSearch from '../components/booking/HotelSearch'
import ActivitySearch from '../components/booking/ActivitySearch'
import CarRentalSearch from '../components/booking/CarRentalSearch'

const BookingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'activities' | 'cars'>('flights')

  return (
    <Layout>
      <SEO title="預訂系統" description="預訂您的航班、酒店、活動和租車" />
      <h1>預訂系統</h1>
      <nav>
        <button onClick={() => setActiveTab('flights')}>航班</button>
        <button onClick={() => setActiveTab('hotels')}>酒店</button>
        <button onClick={() => setActiveTab('activities')}>活動</button>
        <button onClick={() => setActiveTab('cars')}>租車</button>
      </nav>
      {activeTab === 'flights' && <FlightSearch />}
      {activeTab === 'hotels' && <HotelSearch />}
      {activeTab === 'activities' && <ActivitySearch />}
      {activeTab === 'cars' && <CarRentalSearch />}
    </Layout>
  )
}

export default BookingPage