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
        name: `markdown-pages`,
        path: `${__dirname}/src/data/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data/markdown-pages`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `activities`,
        path: `${__dirname}/src/data/activities`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cars`,
        path: `${__dirname}/src/data/cars`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hotels`,
        path: `${__dirname}/src/data/hotels`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `flights`,
        path: `${__dirname}/src/data/flights`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local-activities`,
        path: `${__dirname}/src/data/local-activities`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `promotions`,
        path: `${__dirname}/src/data/promotions`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `travel-guides`,
        path: `${__dirname}/src/data/travel-guides`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `destinations`,
        path: `${__dirname}/src/data/destinations`,
        ignore: [`**/\.*`],
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
        icon: `src/images/icon.png`,
      },
    },
    ],
}