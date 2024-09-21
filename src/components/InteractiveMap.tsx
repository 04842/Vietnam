// src/components/InteractiveMap.tsx

import React from 'react'

interface InteractiveMapProps {
  location: {
    latitude: number
    longitude: number
  }
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ location }) => {
  return (
    <div style={{ height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <p>此處曾經有一個地圖，坐標為：[{location.latitude}, {location.longitude}]</p>
    </div>
  )
}

export default InteractiveMap