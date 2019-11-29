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
import { slugify } from "../utils"
import { Grid, Divider, Container, Box } from "@material-ui/core"
import EventList, { GenerateTags } from "../components/event-list"

const LoadBoard = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Load Board" />
      <DividedSection>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <Container key={frontmatter.path} maxWidth="md">
             <Link to={frontmatter.path}>
             {frontmatter.title}
             </Link>
            </Container>
          )
        })}
      </DividedSection>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery {
    allMarkdownRemark( 
      {sort: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
  }
  }
`
export default LoadBoard