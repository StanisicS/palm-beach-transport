/* eslint-disable no-unreachable */
if (typeof document !== "undefined") {
  const path = require("path")

  exports.createPages = ({ graphql, actions }) => {
    const { createPages } = actions

    return new Promise((resolve, reject) => {
      const blogPostTemplate = path.resolve("src/template/blogTemplate.js")
    })

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    data
                    title
                    image
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path
          const image = node.frontmatter.image
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              picture: image,
            },
          })

          resolve()
        })
      })
    )
  }
  exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
    type SitePage implements Node @dontInfer {
      path: String!
    }
  `)
  }
}
