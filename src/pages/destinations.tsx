// src/pages/destinations.tsx

import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import seo from '../components/seo'

interface Destination {
  id: string
  name: string
  slug: string
  description: string
}

interface DestinationsPageData {
  allDestination: {
    nodes: Destination[]
  }
}

const DestinationsPage: React.FC<PageProps<DestinationsPageData>> = ({ data }) => {
  const destinations = data.allDestination.nodes

  return (
    <Layout>
      <seo title="目的地" description="探索我們提供的所有精彩目的地" />
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
    allDestination {
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`