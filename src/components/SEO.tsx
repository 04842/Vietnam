// src/components/Seo.tsx

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  title: string
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  children?: React.ReactNode
}

const Seo: React.FC<SeoProps> = ({ description, lang = 'zh-TW', meta = [], title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <html lang={lang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map((item, index) => (
        <meta key={index} name={item.name} content={item.content} />
      ))}
      {children}
    </>
  )
}

export default Seo