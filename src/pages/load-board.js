import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  DividedSection,
  Title,
  Text,
} from "gatsby-theme-material-foundry"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact"
import styled from "styled-components"
import { Container } from "@material-ui/core"

const Kanta = styled.div`
  margin: 4rem auto;
  padding: 1px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadBoard = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Load Board" />
      <Kanta>
        <MDBContainer>
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <div key={frontmatter.path}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            )
          })}
        </MDBContainer>
      </Kanta>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
export default LoadBoard
