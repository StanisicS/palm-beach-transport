// // import React from "react"
// // import { Link, graphql, useStaticQuery } from "gatsby"
// import Layout from "../components/layout"
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
// import styled from "styled-components"
// import { Helmet } from "react-helmet"
// import SEO from "../components/seo"

// const StyledLink = styled(props => <Link {...props} />)`
//   background: #f4f4f4;
//   color: #000000;
//   display: block;
//   padding: 1rem;
//   text-decoration: none;
//   &:hover {
//     background: #e4e4e4;
//     cursor: pointer;
//   }
// `

// const Kanta = styled.div`
//   margin: 7rem auto;
//   padding: 1px;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
// const Posts = styled.li`
//   list-style-type: none;
//   margin: 0;
// `
// const Date = styled.p`
//   color: #777777;
//   font-size: 3rem;
//   font-style: italic;
// `

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const LoadBoard = edges => {
//   const data = useStaticQuery(graphql`
//     {
//       markdownRemark {
//         frontmatter {
//           image
//           title
//           path
//         }
//       }
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <pre>
//       {JSON.stringify(data, null, 4)}
//       <Helmet>
//         <title>{"Load Board"}</title>
//         <Layout>
//           <SEO title="Load Board" />
//           <Kanta>
//             <MDBContainer>
//               <h2>Available Loads</h2>
//               <ul>
//                 {edges.map(edge => {
//                   const { path, title } = edge.node.frontmatter
//                   return (
//                     <Posts key={path}>
//                       <StyledLink to={path}>
//                         <Date>{title}</Date>
//                       </StyledLink>
//                     </Posts>
//                   )
//                 })}
//               </ul>
//             </MDBContainer>
//           </Kanta>
//         </Layout>
//       </Helmet>
//     </pre>
//   )
// }

// export default LoadBoard

// const LoadBoard = ({ useSiteMetadata }) => {
//   const { allMarkdownRemark } = allMarkdownRemark.edges.node.frontmatter
//   const { edges } = edges.node.frontmatter
//   const { node } = node.frontmatter
//   const { frontmatter } = frontmatter
//   return (
//     <Helmet>
//       <title>{"Load Board"}</title>
//       <Layout>
//         <SEO title="Load Board" />
//         <Kanta>
//           <MDBContainer>
//             <h2>Available Loads</h2>
//             <ul>
//               {edges.map(edge => {
//                 const { path, title } = edge.node.frontmatter
//                 return (
//                   <Posts key={path}>
//                     <StyledLink to={path}>
//                       <Date>{title}</Date>
//                     </StyledLink>
//                   </Posts>
//                 )
//               })}
//             </ul>
//           </MDBContainer>
//         </Kanta>
//       </Layout>
//     </Helmet>
//   )
// }
// export default LoadBoard

import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Available Loads
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
