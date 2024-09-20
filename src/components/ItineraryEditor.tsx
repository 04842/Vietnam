// src/components/ItineraryEditor.tsx

import React from 'react'

interface ItineraryDay {
  day: number
  activities: string[]
}

interface ItineraryEditorProps {
  itinerary: {
    days: ItineraryDay[]
  }
  onChange: (newItinerary: { days: ItineraryDay[] }) => void
}

const ItineraryEditor: React.FC<ItineraryEditorProps> = ({ itinerary, onChange }) => {
  const handleActivityChange = (dayIndex: number, activityIndex: number, newActivity: string) => {
    const newDays = [...itinerary.days]
    newDays[dayIndex].activities[activityIndex] = newActivity
    onChange({ days: newDays })
  }

  const handleAddActivity = (dayIndex: number) => {
    const newDays = [...itinerary.days]
    newDays[dayIndex].activities.push('')
    onChange({ days: newDays })
  }

  return (
    <div>
      <h2>編輯您的行程</h2>
      {itinerary.days.map((day, dayIndex) => (
        <div key={day.day}>
          <h3>第 {day.day} 天</h3>
          {day.activities.map((activity, activityIndex) => (
            <input
              key={activityIndex}
              type="text"
              value={activity}
              onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
            />
          ))}
          <button onClick={() => handleAddActivity(dayIndex)}>添加活動</button>
        </div>
      ))}
    </div>
  )
}

export default ItineraryEditor