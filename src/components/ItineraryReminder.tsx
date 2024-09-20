// src/components/ItineraryReminder.tsx

import React from 'react'
import { useNotification } from '../context/NotificationContext'

interface ItineraryReminderProps {
  itineraryId: string
  departureDate: string
}

const ItineraryReminder: React.FC<ItineraryReminderProps> = ({ itineraryId, departureDate }) => {
  const { addNotification } = useNotification()

  const handleSetReminder = () => {
    // 這裡應該調用後端 API 來設置行程提醒
    console.log(`為行程 ${itineraryId} 設置提醒，出發日期：${departureDate}`)
    addNotification({
      type: 'itinerary',
      message: `已為行程 ${itineraryId} 設置提醒，出發日期：${departureDate}`
    })
  }

  return (
    <button onClick={handleSetReminder}>設置行程提醒</button>
  )
}

export default ItineraryReminder