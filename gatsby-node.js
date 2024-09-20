exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Destination implements Node {
      id: ID!
      name: String!
      slug: String!
      description: String
      history: String
      culture: String
      location: String
      image: File @fileByRelativePath
      popularity: Float
    }

    type Activity implements Node {
      id: ID!
      name: String!
      description: String!
      price: Float!
      duration: String
      location: String
      date: String
    }

    type Car implements Node {
      id: ID!
      make: String!
      model: String!
      price: Float!
      type: String
      seats: Int
    }

    type Hotel implements Node {
      id: ID!
      name: String!
      rating: Float!
      price: Float!
      location: String!
      amenities: [String]
    }

    type Flight implements Node {
      id: ID!
      airline: String!
      departureTime: String!
      arrivalTime: String!
      price: Float!
      origin: String!
      destination: String!
    }

    type LocalActivity implements Node {
      id: ID!
      name: String!
      description: String!
      date: String!
      location: String!
      price: Float
      destinationName: String
      activities: [Activity!]
    }

    type Promotion implements Node {
      id: ID!
      title: String!
      description: String!
      slug: String!
      startDate: Date! @dateformat
      endDate: Date @dateformat
      discountPercentage: Float
    }

    type TravelGuide implements Node {
      id: ID!
      destinationName: String!
      threeDay: String!
      fiveDay: String!
      tips: [String]
      bestTimeToVisit: String
    }

    type MarkdownRemark implements Node {
      id: ID!
      frontmatter: Frontmatter
      html: String
      excerpt: String
      fields: Fields
      fileAbsolutePath: String
      slug: String
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      author: String
      excerpt: String
      name: String
      description: String
      history: String
      culture: String
      location: Location
      tags: [String]
    }

    type Fields {
      slug: String
    }

    type Location {
      latitude: Float
      longitude: Float
    }

    type HotelConnection {
      nodes: [Hotel!]!
    }

    type CarConnection {
      nodes: [Car!]!
    }

    type ActivityConnection {
      nodes: [Activity!]!
    }

    extend type Query {
      allDestinations: [Destination!]!
    }
  `
  createTypes(typeDefs)
}
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const destinationData = [
    {
      name: "巴黎",
      slug: "paris",
      description: "浪漫之都，艾菲爾鐵塔的所在地"
    },
    // ... 更多目的地數據
  ]

  destinationData.forEach((destination, index) => {
    const node = {
      ...destination,
      id: createNodeId(`destination-${index}`),
      internal: {
        type: "Destination",
        contentDigest: createContentDigest(destination),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const destinationData = [
    {
      name: "巴黎",
      slug: "paris"
    },
    // ... 更多目的地數據
  ]

  destinationData.forEach((destination, index) => {
    const node = {
      ...destination,
      id: createNodeId(`destination-${index}`),
      internal: {
        type: "Destination",
        contentDigest: createContentDigest(destination),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const activityData = [
    {
      name: "城市觀光之旅",
      description: "探索城市的歷史和文化景點",
      price: 50.00
    },
    // ... 更多活動數據
  ]

  activityData.forEach((activity, index) => {
    const node = {
      ...activity,
      id: createNodeId(`activity-${index}`),
      internal: {
        type: "Activity",
        contentDigest: createContentDigest(activity),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const carData = [
    {
      make: "Toyota",
      model: "Corolla",
      price: 50.00
    },
    // ... 更多汽車數據
  ]

  carData.forEach((car, index) => {
    const node = {
      ...car,
      id: createNodeId(`car-${index}`),
      internal: {
        type: "Car",
        contentDigest: createContentDigest(car),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const hotelData = [
    {
      name: "Grand Hotel",
      rating: 4.5,
      price: 200.00
    },
    // ... 更多酒店數據
  ]

  hotelData.forEach((hotel, index) => {
    const node = {
      ...hotel,
      id: createNodeId(`hotel-${index}`),
      internal: {
        type: "Hotel",
        contentDigest: createContentDigest(hotel),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const flightData = [
    {
      airline: "China Airlines",
      departureTime: "2023-06-01T10:00:00",
      arrivalTime: "2023-06-01T14:00:00",
      price: 500.00
    },
    // ... 更多航班數據
  ]

  flightData.forEach((flight, index) => {
    const node = {
      ...flight,
      id: createNodeId(`flight-${index}`),
      internal: {
        type: "Flight",
        contentDigest: createContentDigest(flight),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const localActivityData = [
    {
      destinationName: "東京",
      activities: [
        {
          name: "櫻花節",
          description: "欣賞美麗的櫻花",
          date: "2023-04-01"
        },
        // ... 更多活動
      ]
    },
    // ... 更多目的地的本地活動數據
  ]

  localActivityData.forEach(localActivity => {
    const node = {
      ...localActivity,
      id: createNodeId(`local-activity-${localActivity.destinationName}`),
      internal: {
        type: "LocalActivity",
        contentDigest: createContentDigest(localActivity),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const promotionData = [
    {
      title: "夏季特惠",
      description: "預訂夏季旅遊行程，享受20%折扣",
      slug: "summer-special",
      startDate: "2023-06-01"
    },
    // ... 更多優惠活動數據
  ]

  promotionData.forEach(promotion => {
    const node = {
      ...promotion,
      id: createNodeId(`promotion-${promotion.slug}`),
      internal: {
        type: "Promotion",
        contentDigest: createContentDigest(promotion),
      },
    }
    createNode(node)
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const travelGuideData = [
    {
      destinationName: "東京",
      threeDay: "第一天：參觀淺草寺...",
      fiveDay: "第一天：參觀淺草寺..."
    },
    // ... 更多旅遊攻略數據
  ]

  travelGuideData.forEach(guide => {
    const node = {
      ...guide,
      id: createNodeId(`travel-guide-${guide.destinationName}`),
      internal: {
        type: "TravelGuide",
        contentDigest: createContentDigest(guide),
      },
    }
    createNode(node)
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Create DSG page
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // Create pages for destinations
  const destinationResult = await graphql(`
    query {
      allDestination {
        nodes {
          slug
        }
      }
    }
  `)

  if (destinationResult.errors) {
    console.error(destinationResult.errors)
    throw destinationResult.errors
  }

  destinationResult.data.allDestination.nodes.forEach(node => {
    createPage({
      path: `/destination/${node.slug}`,
      component: require.resolve("./src/templates/destination.tsx"),
      context: {
        slug: node.slug,
      },
    })
  })

  // Create pages for blog posts
  const blogResult = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    console.error(blogResult.errors)
    throw blogResult.errors
  }

  blogResult.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.fields.slug}`,
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/destinations/" } }) {
        edges {
          node {
            id
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/destination/${node.frontmatter.name.toLowerCase().replace(/ /g, '-')}`,
      component: path.resolve(`src/templates/destination.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
