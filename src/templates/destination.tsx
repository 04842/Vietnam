// src/templates/destination.tsx

import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import seo from '../components/seo'
import InteractiveMap from '../components/InteractiveMap'
import TravelGuide from '../components/TravelGuide'
import LocalActivities from '../components/LocalActivities'
import LanguageCurrencySelector from '../components/LanguageCurrencySelector'

interface DestinationData {
  markdownRemark: {
    frontmatter: {
      name: string
      description: string
      history: string
      culture: string
      location: {
        latitude: number
        longitude: number
      }
    }
  }
}

const DestinationPage: React.FC<PageProps<DestinationData>> = ({ data }) => {
  const { frontmatter: destination } = data.markdownRemark

  return (
    <Layout>
      <Seo title={destination.name} description={destination.description} />
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <section>
        <h2>歷史</h2>
        <p>{destination.history}</p>
      </section>
      <section>
        <h2>文化</h2>
        <p>{destination.culture}</p>
      </section>
      <InteractiveMap location={destination.location} />
      <TravelGuide destinationName={destination.name} />
      <LocalActivities destinationName={destination.name} />
      <LanguageCurrencySelector />
    </Layout>
  )
}

export default DestinationPage

export const query = graphql`
  query($id: String!, $slug: String!) {
    markdownRemark(id: { eq: $id }, fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        description
        history
        culture
        location {
          latitude
          longitude
        }
      }
    }
  }
`
