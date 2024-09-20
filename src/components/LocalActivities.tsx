// src/components/LocalActivities.tsx

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface LocalActivitiesProps {
  destinationName: string
}

const LocalActivities: React.FC<LocalActivitiesProps> = ({ destinationName }) => {
  const data = useStaticQuery(graphql`
    query {
      allLocalActivities {
        nodes {
          id
          destinationName
          activities {
            name
            description
            date
          }
        }
      }
    }
  `)

  const localActivities = data.allLocalActivities.nodes.find(
    (activities: any) => activities.destinationName === destinationName
  )

  if (!localActivities) return null

  return (
    <section>
      <h2>當地活動</h2>
      <ul>
        {localActivities.activities.map((activity: any) => (
          <li key={activity.name}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>日期：{activity.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LocalActivities