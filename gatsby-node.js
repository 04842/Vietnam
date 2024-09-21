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

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // 目的地數據
  const destinationData = [
    {
      name: "巴黎",
      slug: "paris",
      description: "浪漫之都，艾菲爾鐵塔的所在地"
    },
    // ... 更多目的地數據
  ]

  // 活動數據
  const activityData = [
    {
      name: "城市觀光之旅",
      description: "探索城市的歷史和文化景點",
      price: 50.00
    },
    // ... 更多活動數據
  ]

  // 汽車數據
  const carData = [
    {
      make: "Toyota",
      model: "Corolla",
      price: 50.00
    },
    // ... 更多汽車數據
  ]

  // 酒店數據
  const hotelData = [
    {
      name: "Grand Hotel",
      rating: 4.5,
      price: 200.00
    },
    // ... 更多酒店數據
  ]

  // 航班數據
  const flightData = [
    {
      airline: "China Airlines",
      departureTime: "2023-06-01T10:00:00",
      arrivalTime: "2023-06-01T14:00:00",
      price: 500.00
    },
    // ... 更多航班數據
  ]

  // 本地活動數據
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

  // 優惠活動數據
  const promotionData = [
    {
      title: "夏季特惠",
      description: "預訂夏季旅遊行程，享受20%折扣",
      slug: "summer-special",
      startDate: "2023-06-01"
    },
    // ... 更多優惠活動數據
  ]

  // 旅遊攻略數據
  const travelGuideData = [
    {
      destinationName: "東京",
      threeDay: "第一天：參觀淺草寺...",
      fiveDay: "第一天：參觀淺草寺..."
    },
    // ... 更多旅遊攻略數據
  ]

  // 創建節點的函數
  const createNodesForData = (data, type, idPrefix) => {
    data.forEach((item, index) => {
      const node = {
        ...item,
        id: createNodeId(`${idPrefix}-${index}`),
        internal: {
          type: type,
          contentDigest: createContentDigest(item),
        },
      }
      createNode(node)
    })
  }

  // 為每種數據類型創建節點
  createNodesForData(destinationData, "Destination", "destination")
  createNodesForData(activityData, "Activity", "activity")
  createNodesForData(carData, "Car", "car")
  createNodesForData(hotelData, "Hotel", "hotel")
  createNodesForData(flightData, "Flight", "flight")
  createNodesForData(localActivityData, "LocalActivity", "local-activity")
  createNodesForData(promotionData, "Promotion", "promotion")
  createNodesForData(travelGuideData, "TravelGuide", "travel-guide")
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Create DSG page
  // Create pages for destinations from markdown files

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // Create pages for destinations
  const markdownResult = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/destinations/" } }) {
        edges {
          node {
            id
            frontmatter {
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log('Markdown query result:', JSON.stringify(markdownResult, null, 2))

  if (markdownResult.errors) {
    console.error(markdownResult.errors)
    throw markdownResult.errors
  }

  markdownResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log('Processing node:', node.id, node.fields.slug, node.frontmatter.name)
    if (node.frontmatter && node.frontmatter.name) {
      createPage({
        path: `/destination/${node.fields.slug}`,
        component: path.resolve(`src/templates/destination.tsx`),
        context: {
          id: node.id,
          slug: node.fields.slug,
        },
      })
      console.log('Created page for:', node.frontmatter.name, 'with path:', `/destination/${node.fields.slug}`)
    } else {
      console.warn(`Skipping creation of destination page for node with id ${node.id} due to missing name in frontmatter`)
    }
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
  const markdownResult = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/destinations/" } }) {
        edges {
          node {
            id
            frontmatter {
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log('Markdown query result:', JSON.stringify(markdownResult, null, 2))

  if (markdownResult.errors) {
    console.error(markdownResult.errors)
    throw markdownResult.errors
  }

  markdownResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log('Processing node:', node.id, node.fields.slug, node.frontmatter.name)
    if (node.frontmatter && node.frontmatter.name) {
      createPage({
        path: `/destination/${node.fields.slug}`,
        component: path.resolve(`src/templates/destination.tsx`),
        context: {
          id: node.id,
          slug: node.fields.slug,
        },
      })
      console.log('Created page for:', node.frontmatter.name, 'with path:', `/destination/${node.fields.slug}`)
    } else {
      console.warn(`Skipping creation of destination page for node with id ${node.id} due to missing name in frontmatter`)
    }
  })

  // Create pages for blog posts
  const blogResult = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        nodes {
          id
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
      component: path.resolve(`src/templates/blog-post.tsx`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}

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
