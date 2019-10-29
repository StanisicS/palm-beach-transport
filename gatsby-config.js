module.exports = {
  siteMetadata: {
    title: `Palm Beach Transport`,
    description: ``,
    author: `@evansit.rs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-theme-material-foundry`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId: "1ZM4fzS5ggnv7eed21i40mDkOD-dwOPCDO6FfZY9JEn8",
    //     worksheetTitle: "projects",
    //     credentials: require("./key.json"),
    //   },
    // },
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId: "1PKxuE9HGlnWXZfEsnL-DUdfUpmhHSn9u2XV1lhlDn3E",
    //     worksheetTitle: "people",
    //     credentials: require("./key.json"),
    //   },
    // },
    // {
    //   resolve: "gatsby-source-google-sheets",
    //   options: {
    //     spreadsheetId: "1ALmxQIDDC8GKxkx0sIuoGCkI_N0xHgJ8GkCYMOGfhrY",
    //     worksheetTitle: "companies",
    //     credentials: require("./key.json"),
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
