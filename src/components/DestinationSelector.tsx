// src/components/DestinationSelector.tsx

import React from 'react'

interface Destination {
  id: string
  name: string
  slug: string
}

interface DestinationSelectorProps {
  destinations: Destination[]
  onSelect: (destinationId: string) => void
}

const DestinationSelector: React.FC<DestinationSelectorProps> = ({ destinations, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">選擇目的地</option>
      {destinations.map((destination) => (
        <option key={destination.id} value={destination.id}>
          {destination.name}
        </option>
      ))}
    </select>
  )
}

export default DestinationSelector