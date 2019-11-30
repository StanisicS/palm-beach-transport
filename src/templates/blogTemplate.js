import React from "react"
import { graphql } from "gatsby"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Kanta = styled.div`
  margin: 4rem 8ren;
  padding: 1px;
  max-width: 600px;
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
  return (
    <Layout>
      <MDBContainer>
        <Kanta className="blog-post-container">
          <Kanta className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <Kanta
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Kanta>
        </Kanta>
      </MDBContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
