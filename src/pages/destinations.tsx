// src/pages/destinations.tsx

import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

interface DestinationsPageProps {
  data: {
    allDestinations: {
      nodes: Array<{
        id: string
        name: string
        slug: string
        description: string
      }>
    }
  }
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ data }) => {
  const destinations = data.allDestinations.nodes

  return (
    <Layout>
      <SEO title="目的地" description="探索我們提供的所有精彩目的地" />
      <h1>目的地</h1>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <h2>
              <Link to={`/destination/${destination.slug}`}>{destination.name}</Link>
            </h2>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default DestinationsPage

export const query = graphql`
  query {
    allDestinations {
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`