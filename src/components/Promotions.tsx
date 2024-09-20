// src/components/Promotions.tsx

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface Promotion {
  id: string
  title: string
  description: string
  slug: string
}

const Promotions: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allPromotions(limit: 3, sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          title
          description
          slug
        }
      }
    }
  `)

  const promotions: Promotion[] = data.allPromotions.nodes

  return (
    <section>
      <h2>當前優惠活動</h2>
      {promotions.map((promotion) => (
        <article key={promotion.id}>
          <h3>
            <Link to={`/promotion/${promotion.slug}`}>{promotion.title}</Link>
          </h3>
          <p>{promotion.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Promotions