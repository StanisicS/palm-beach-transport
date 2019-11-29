import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"
import Img from "gatsby-image"
// import Helmet from "react-helmet"

const Kanta = styled.div`
  margin: 4rem auto;
  padding: 1px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Template({ data }) {
  const post = data.allMarkdownRemark.edges.node
  useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              image
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
      file(relativePath: { eq: "capture.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <pre>
      {JSON.stringify(data, null, 4)}
      <Layout>
        <Kanta>
          <MDBContainer>
            <br />
            <div className="blog-post-container">
              {" "}
              <div className="blog-post">
                {" "}
                <h1>{post.frontmatter.title}</h1>{" "}
                <h2>{post.frontmatter.date}</h2>{" "}
                <Img fluid={data.file.childImageSharp.fluid} />
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />{" "}
              </div>{" "}
            </div>
          </MDBContainer>
        </Kanta>
      </Layout>
    </pre>
  )
}

// export default function Template({ data }) {
//   const post = data.markdownRemark
//   // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
//   return (
//     <Layout>
//       <Kanta>
//         <MDBContainer>
//           <br />
//           <div className="blog-post-container">
//             {" "}
//             <div className="blog-post">
//               {" "}
//               <h1>{post.frontmatter.title}</h1> <h2>{post.frontmatter.date}</h2>{" "}
//               <Img fluid={data.file.childImageSharp.fluid} />
//               <div
//                 className="blog-post-content"
//                 dangerouslySetInnerHTML={{ __html: post.html }}
//               />{" "}
//             </div>{" "}
//           </div>
//         </MDBContainer>
//       </Kanta>
//     </Layout>
//   )
// }
// const useSiteMetadata = () => {
//   const data = useStaticQuery(
//     graphql`
//       query BlogPostByPath($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//           frontmatter {
//             image
//             date(formatString: "MMMM DD, YYYY")
//             title
//             path
//           }
//         }
//         file(relativePath: { eq: "capture.png" }) {
//           childImageSharp {
//             # Specify the image processing specifications right in the query.
//             # Makes it trivial to update as your page's design changes.
//             fluid(maxWidth: 900) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   )
//   return data
//
