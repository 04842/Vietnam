// src/pages/index.tsx

import React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import SearchBar from '../components/SearchBar'
import TravelRecommendations from '../components/TravelRecommendations'
import Promotions from '../components/Promotions'

interface SiteMetadata {
  title: string
  description: string
}

interface HomePageData {
  site: {
    siteMetadata: SiteMetadata
  }
}

type HomePageProps = PageProps<HomePageData>

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

export const Head: HeadFC<HomePageData> = ({ data }) => (
  <Seo title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
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