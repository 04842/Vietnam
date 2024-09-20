// src/components/booking/ActivitySearch.tsx

import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import 'react-datepicker/dist/react-datepicker.css'

interface Activity {
  id: string
  name: string
  description: string
  price: number
}

interface QueryData {
  allActivity: {
    nodes: Activity[]
  }
}

const ActivitySearch: React.FC = () => {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [activities, setActivities] = useState<Activity[]>([])

  const data = useStaticQuery<QueryData>(graphql`
    query {
      allActivity {
        nodes {
          id
          name
          description
          price
        }
      }
    }
  `)

  const handleSearch = () => {
    // 在實際應用中，這裡應該調用 API 進行搜索
    // 現在我們只是模擬搜索結果
    setActivities(data.allActivity.nodes)
  }

  return (
    <div>
      <h2>搜索活動</h2>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="目的地"
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>價格：${activity.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivitySearch