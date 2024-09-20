// src/components/booking/FlightSearch.tsx

import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-datepicker/dist/react-datepicker.css'

interface Flight {
  id: string
  airline: string
  departureTime: string
  arrivalTime: string
  price: number
}

const FlightSearch: React.FC = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [flights, setFlights] = useState<Flight[]>([])

  const data = useStaticQuery(graphql`
    query {
      allFlights {
        nodes {
          id
          airline
          departureTime
          arrivalTime
          price
        }
      }
    }
  `)

  const handleSearch = () => {
    // 在實際應用中，這裡應該調用 API 進行搜索
    // 現在我們只是模擬搜索結果
    setFlights(data.allFlights.nodes)
  }

  return (
    <div>
      <h2>搜索航班</h2>
      <input 
        type="text" 
        value={origin} 
        onChange={(e) => setOrigin(e.target.value)} 
        placeholder="出發地"
      />
      <input 
        type="text" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
        placeholder="目的地"
      />
      <input 
        type="date" 
        value={departureDate} 
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.airline} - 出發時間：{flight.departureTime} - 到達時間：{flight.arrivalTime} - 價格：${flight.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FlightSearch