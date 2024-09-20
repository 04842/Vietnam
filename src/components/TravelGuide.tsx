// src/components/TravelGuide.tsx

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface TravelGuideProps {
  destinationName: string
}

interface TravelGuideData {
  id: string
  destinationName: string
  threeDay: string
  fiveDay: string
}

interface QueryData {
  allTravelGuide: {
    nodes: TravelGuideData[]
  }
}

const TravelGuide: React.FC<TravelGuideProps> = ({ destinationName }) => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allTravelGuide {
        nodes {
          id
          destinationName
          threeDay
          fiveDay
        }
      }
    }
  `)

  const guide = data.allTravelGuide.nodes.find(
    (guide) => guide.destinationName === destinationName
  )

  if (!guide) return null

  return (
    <section>
      <h2>旅遊攻略</h2>
      <h3>3日遊建議</h3>
      <p>{guide.threeDay}</p>
      <h3>5日遊建議</h3>
      <p>{guide.fiveDay}</p>
    </section>
  )
}

export default TravelGuide