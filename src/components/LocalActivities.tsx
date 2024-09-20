// src/components/LocalActivities.tsx

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface LocalActivitiesProps {
  destinationName: string
}

interface Activity {
  name: string
  description: string
  date: string
}

interface LocalActivity {
  id: string
  destinationName: string
  activities: Activity[]
}

interface QueryData {
  allLocalActivity: {
    nodes: LocalActivity[]
  }
}

const LocalActivities: React.FC<LocalActivitiesProps> = ({ destinationName }) => {
  const data = useStaticQuery<QueryData>(graphql`
    query {
      allLocalActivity {
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

  const localActivities = data.allLocalActivity.nodes.find(
    (activities) => activities.destinationName === destinationName
  )

  if (!localActivities) return null

  return (
    <section>
      <h2>當地活動</h2>
      <ul>
        {localActivities.activities.map((activity) => (
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