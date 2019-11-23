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
import withStyles from "@material-ui/core/styles/withStyles"

import styled from "styled-components"

const Glava = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Slika = styled.img`
  width: 130px;
    padding: 0px;
    margin: -50px auto;
    position: relative;
    bottom: 3px;
`;



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
        file(relativePath: { eq: "pbt-logoL-Standard@2x.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return data
}

const TemplateWrapper = ({ children }) => {
  const { site, file } = useSiteMetadata()
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
        <meta name="theme-color" content="#E8ECEB" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Glava as Header
        absolute
        fixed
        brand={site.siteMetadata.title}
        logo={
<Slika src={file.childImageSharp.fixed.src} href="/" />
}
        rightLinks={
          <HeaderLinks
            links={[
              { link: "/", text: "Home" },
              { link: "/need-load", text: "Find Load" },
              { link: "/load-board", text: "Load Board" },
              { link: "/contact-page", text: "Contact" },
              { link: "/about", text: "About" },
              { link: "/sign-in", text: "Log In" },
            ]}
          />
        }
      />
      <div style={{ minHeight: "100%" }}>{children}</div>
      <AppFooter />
    </div>
  )
}

export default TemplateWrapper
