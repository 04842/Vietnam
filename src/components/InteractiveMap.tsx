// src/components/InteractiveMap.tsx

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface InteractiveMapProps {
  location: {
    latitude: number
    longitude: number
  }
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ location }) => {
  return (
    <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.latitude, location.longitude]}>
        <Popup>
          這裡是目的地的中心位置
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default InteractiveMap