// src/components/booking/HotelSearch.tsx

import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

interface Hotel {
  id: string
  name: string
  rating: number
  price: number
}

interface QueryData {
  allHotel: {
    nodes: Hotel[]
  }
}

const HotelSearch: React.FC = () => {
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [hotels, setHotels] = useState<Hotel[]>([])

  const data = useStaticQuery<QueryData>(graphql`
    query {
      allHotel {
        nodes {
          id
          name
          rating
          price
        }
      }
    }
  `)

  const handleSearch = () => {
    // 在實際應用中，這裡應該調用 API 進行搜索
    // 現在我們只是模擬搜索結果
    setHotels(data.allHotel.nodes)
  }

  return (
    <div>
      <h2>搜索酒店</h2>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="目的地"
      />
      <input 
        type="date" 
        value={checkIn} 
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input 
        type="date" 
        value={checkOut} 
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - 評分：{hotel.rating} - 價格：${hotel.price}/晚
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HotelSearch