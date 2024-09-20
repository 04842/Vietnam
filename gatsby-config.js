const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Vietnam Travel Guide`,
    description: `Discover the beauty of Vietnam with our comprehensive travel guide.`,
    author: `@yourcompany`,
    siteUrl: `https://yourvietnamtravelsite.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, `src`, `data`, `markdown-pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `activities`,
        path: path.join(__dirname, `src`, `data`, `activities`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cars`,
        path: path.join(__dirname, `src`, `data`, `cars`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hotels`,
        path: path.join(__dirname, `src`, `data`, `hotels`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `flights`,
        path: path.join(__dirname, `src`, `data`, `flights`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local-activities`,
        path: path.join(__dirname, `src`, `data`, `local-activities`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `promotions`,
        path: path.join(__dirname, `src`, `data`, `promotions`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `travel-guides`,
        path: path.join(__dirname, `src`, `data`, `travel-guides`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `destinations`,
        path: path.join(__dirname, `src`, `data`, `destinations`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vietnam Travel Guide`,
        short_name: `VN Travel`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // 使用 Gatsby 默認圖標
      },
        },
  ],
}