import React from "react"
import { graphql } from "gatsby"

import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Img from "gatsby-images"

const StyledLink = styled(props => <Link {...props} />)`
background: #f4f4f4;
const Posts = styled.li;
`

const Date = styled.p`
  color: #777777;
  font-size: 3rem;
  font-style: italic;
`
const Kanta = styled.div`
  margin: 4rem auto;
  padding: 1px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const post = data.markdownRemark.html.frontmatter
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <img
          fluid={data.file.childImageSharp.fluid}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SITE_METADATA_AGAIN($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          frontmatter {
            image
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
        file(relativePath: { eq: "capture.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 900) {
              tracedSVG
            }
          }
        }
      }
    `
  )
}
