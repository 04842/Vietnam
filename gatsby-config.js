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
        path: `/opt/buildhome/repo/src/data/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `/opt/buildhome/repo/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `/opt/buildhome/repo/src/data/markdown-pages`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `activities`,
        path: `/opt/buildhome/repo/src/data/activities`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cars`,
        path: `/opt/buildhome/repo/src/data/cars`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hotels`,
        path: `/opt/buildhome/repo/src/data/hotels`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `flights`,
        path: `/opt/buildhome/repo/src/data/flights`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local-activities`,
        path: `/opt/buildhome/repo/src/data/local-activities`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `promotions`,
        path: `/opt/buildhome/repo/src/data/promotions`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `travel-guides`,
        path: `/opt/buildhome/repo/src/data/travel-guides`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `destinations`,
        path: `/opt/buildhome/repo/src/data/destinations`,
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