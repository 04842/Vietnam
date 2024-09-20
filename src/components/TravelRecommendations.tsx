// src/components/TravelRecommendations.tsx

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface Destination {
  id: string
  name: string
  slug: string
}

const TravelRecommendations: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allDestinations(limit: 5, sort: { fields: popularity, order: DESC }) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  const destinations: Destination[] = data.allDestinations.nodes

  return (
    <section>
      <h2>熱門目的地推薦</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <Link to={`/destination/${destination.slug}`}>{destination.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TravelRecommendations