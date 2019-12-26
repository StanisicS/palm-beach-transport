/* eslint-disable no-unreachable */
import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Kanta = styled.div`
  margin: 1rem 1rem;
  padding: 1px;
`

const LoadBoard = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Kanta>{Posts}</Kanta>
    </Layout>
  )
}

export default LoadBoard

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
