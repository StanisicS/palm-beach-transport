import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Footer from "../components/Footer"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

import Navigation from "./Navigation/Navigation"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    padding: "0",
    // paddingRight: "0",
  },
}))

const Layout = props => {
  const { children } = props
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <html lang="sr" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color={theme.palette.black.default}
            />
            <meta name="theme-color" content="#FCB104" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="https://www.palmbeachtrans.com" />
            <meta
              property="og:image"
              content="/images/pbt-logoL-Standard@2x.png"
            />
          </Helmet>
          <Container className={classes.root}>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <Box component="main">{children}</Box>
          </Container>
          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
