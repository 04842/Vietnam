// src/components/Promotions.tsx

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface Promotion {
  id: string
  title: string
  description: string
  slug: string
}

interface QueryData {
  allPromotion: {
    nodes: Promotion[]
  }
}

const Promotions: React.FC = () => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allPromotion(limit: 3, sort: {startDate: ASC}) {
        nodes {
          id
          title
          description
          slug
        }
      }
    }
  `)

  const promotions = data.allPromotion.nodes

  return (
    <section>
      <h2>當前優惠活動</h2>
      {promotions.length > 0 ? (
        promotions.map((promotion) => (
          <article key={promotion.id}>
            <h3>
              <Link to={`/promotion/${promotion.slug}`}>{promotion.title}</Link>
            </h3>
            <p>{promotion.description}</p>
          </article>
        ))
      ) : (
        <p>目前沒有進行中的優惠活動。</p>
      )}
    </section>
  )
}

export default Promotions