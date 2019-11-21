import React from "react"
import { Helmet } from "react-helmet"
import {
  Header,
  HeaderLinks,
  DividedSection,
  Title,
} from "gatsby-theme-material-foundry"
import DashIcon from "@material-ui/icons/Dashboard"
import UserIcon from "@material-ui/icons/AccountCircle"
import { graphql, useStaticQuery } from "gatsby"
import AppFooter from "../modules/views/AppFooter"
import AppAppBar from "../modules/views/AppAppBar"

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SITE_METADATA_AGAIN {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return data
}

const TemplateWrapper = ({ children }) => {
  const { site } = useSiteMetadata()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Helmet>
        <html lang="en" />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
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
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <AppAppBar />
      <div style={{ minHeight: "100%" }}>{children}</div>
      <AppFooter />
    </div>
  )
}

export default TemplateWrapper
