// src/components/booking/CarRentalSearch.tsx

import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-datepicker/dist/react-datepicker.css'

interface Car {
  id: string
  make: string
  model: string
  price: number
}

interface QueryData {
  allCar: {
    nodes: Car[]
  }
}

const CarRentalSearch: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [cars, setCars] = useState<Car[]>([])

  const data = useStaticQuery<QueryData>(graphql`
    query {
      allCar {
        nodes {
          id
          make
          model
          price
        }
      }
    }
  `)

  const handleSearch = () => {
    // 在實際應用中，這裡應該調用 API 進行搜索
    // 現在我們只是模擬搜索結果
    setCars(data.allCar.nodes)
  }

  return (
    <div>
      <h2>搜索租車</h2>
      <input 
        type="text" 
        value={pickupLocation} 
        onChange={(e) => setPickupLocation(e.target.value)} 
        placeholder="取車地點"
      />
      <input 
        type="date" 
        value={pickupDate} 
        onChange={(e) => setPickupDate(e.target.value)}
      />
      <input 
        type="date" 
        value={returnDate} 
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} - 價格：${car.price}/天
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CarRentalSearch