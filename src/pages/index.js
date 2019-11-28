import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  DividedSection,
  Title,
  Text,
  Button,
} from "gatsby-theme-material-foundry"
import { Container, Box } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

function IndexPage(props) {
  const img = props.data.cover.childImageSharp.fixed.src

  return (
    <Helmet>
      <title>{"Home | Palm Beach Transport"}</title>
      <Layout>
        <SEO title="Home" />
        <DividedSection
          black
          image={img}
          height="100vh"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundBlendMode="overlay"
          backgroundColor="#333333"
        >
          <Container maxWidth="sm" align="center">
            <Title variant="h3" align="center">
              PALM BEACH TRANSPORT
            </Title>
            <Text variant="h5" align="center">
              Load Board to Find Truck Loads and Freight
            </Text>
            <Box m={2}>
              <Button color="primary" to="/sign-up">
                Register
              </Button>
            </Box>
          </Container>
        </DividedSection>
        <DividedSection height="80vh">
          <Img fluid={props.data.kickoff.childImageSharp.fluid} />
          <Container>
            <Title variant="h4" align="left">
              Lorem Ipsum
            </Title>
            <Text variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Container>
        </DividedSection>
      </Layout>
    </Helmet>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    cover: file(relativePath: { eq: "cover-main.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kickoff: file(relativePath: { eq: "pbt-kickoff.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
