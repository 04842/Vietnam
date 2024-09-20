// src/pages/index.tsx

import React from 'react'
import { graphql, HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SearchBar from '../components/SearchBar'
import TravelRecommendations from '../components/TravelRecommendations'
import Promotions from '../components/Promotions'

interface HomePageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout>
      <h1>Welcome to our travel website</h1>
      <h2>{title}</h2>
      <SearchBar />
      <TravelRecommendations />
      <Promotions />
    </Layout>
  )
}

export default HomePage

export const Head: HeadFC<HomePageProps> = ({ data }) => (
  <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`