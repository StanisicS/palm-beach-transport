import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, makeStyles, Container } from "@material-ui/core"
import {
  Title,
  Text,
  DividedSection,
  TabPill,
} from "gatsby-theme-material-foundry"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "@material-ui/icons/People"
import List from "@material-ui/icons/List"
import Description from "@material-ui/icons/Description"
import { Helmet } from "react-helmet"
// import img from "gatsby-image"

function AboutPage(props) {
  const img = props.data.cover.childImageSharp.fixed.src
  return (
    <Helmet>
      <title>{"About | Palm Beach Transport"}</title>

      <Layout>
        <SEO title="About Palm Beach Transport" />
        <DividedSection
          black
          image={img}
          height="80vh"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundBlendMode="overlay"
          backgroundColor="#333333"
        >
          <Title variant="h2" align="center">
            About Us
          </Title>
        </DividedSection>
        <Container maxWidth="md">
          <TabPill
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "About Us",
                tabIcon: Description,
                tabContent:
                  ((
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        Palm Beach Transport LLC
                      </Title>
                      <Text variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </li>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </li>
                        </ul>
                      </Text>
                    </Box>
                  ),
                  {
                    TabButton: "Team",
                    tabIcon: Dashboard,
                    tabContent: (
                      <Container maxWidth="md">
                        <Box p={6}>
                          <Title variant="h3" align="center" gutterBottom>
                            Team
                          </Title>
                          <Text variant="h5" align="center" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua..
                          </Text>
                        </Box>
                      </Container>
                    ),
                  }),
              },
            ]}
          />
        </Container>
      </Layout>
    </Helmet>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    cover: file(relativePath: { eq: "cover-main.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
