import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Template = ({ data }) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  const image = markdownRemark.frontmatter.image
  return (
    <div>
      <h1>{title}</h1>
      {/* <img src={image} alt="" /> */}
      <Image fluid={data.image.childImageSharp.fluid} alt={"Available Loads"} />
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        data
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Template
