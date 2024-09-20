// src/components/TravelRecommendations.tsx

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface Destination {
  id: string
  name: string
  slug: string
}

interface QueryData {
  allDestination: {
    nodes: Destination[]
  }
}

const TravelRecommendations: React.FC = () => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allDestination(sort: {popularity: DESC}, limit: 5) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  const destinations = data.allDestination.nodes

  return (
    <section>
      <h2>熱門目的地推薦</h2>
      {destinations.length > 0 ? (
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id}>
              <Link to={`/destination/${destination.slug}`}>{destination.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>目前沒有熱門目的地推薦。</p>
      )}
    </section>
  )
}

export default TravelRecommendations