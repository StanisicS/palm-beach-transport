module.exports = {
  siteMetadata: {
    title: `Palm Beach Transport`,
    description: ``,
    author: `www.evansit.rs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
    // {
    //   resolve: `gatsby-plugin-netlify-identity`,
    //   options: {
    //     url: `https://your-identity-instance-here.netlify.com/`, // required!
    //   },
    // },
    {
      resolve: "gatsby-theme-material-foundry",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#E8ECEB`,
        theme_color: `#FCB104`,
        display: `standalone`,
        icon: `src/images/pbt-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
          // `gatsby-plugin-offline`,
        },
      },
    },
  ],
}
