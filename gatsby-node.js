// to create the page we need access to the blog post template
const path = require("path")
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 250)
//             html
//             id
//             frontmatter {
//               date
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: postTemplate,
//         context: {},
//       })
//     })
//   })
// }
// const path = require("path")
// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
// exports.createPages = async ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/postTemplate.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }

// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { createPage } = actions
//   const result = await graphql`(
//       {
//         allMarkdownRemark(limit: 1000) {
//           edges {
//             node {
//               frontmatter {
//                 path
//                 title
//               }
//             }
//           }
//         }
//       } 
//     )`

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   // Create pages for each markdown file.
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const path = node.frontmatter.path
//     createPage({
//       path: "/load-board/",
//       component: path.resolve(`./src/templates/postTemplate.js`),
//       // In your blog post template's graphql query, you can use path
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         path,
//         id: `123456`,
//       },
//     })
//   })
// }
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql`(
    query($slug: String!) {
      markdownRemark {(slug: { eq: $slug }) {
        frontmatter {
          title
          path
          date
          image
          }
        }
      },
  `
  
  results.data.markdownRemark.frontmatter.forEach((({ slug }) => {
    const post = data.markdownRemark
    createPage({
      path: `/load-board/${post.slug}/`,
      component: require.resolve("./src/templates/postTemplate.js"),
      context: {
        slug: post.slug,
      },
    })
  })
  