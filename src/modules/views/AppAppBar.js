import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import AppBar from "../components/AppBar"
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar"
import {
  Header,
  HeaderLinks,
  DividedSection,
  Title,
} from "gatsby-theme-material-foundry"
import DashIcon from "@material-ui/icons/Dashboard"
import UserIcon from "@material-ui/icons/AccountCircle"
import { graphql, useStaticQuery } from "gatsby"

const styles = theme => ({
  title: {
    fontSize: 22,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
})

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { eq: "pbt-logoL-Standard.png" }) {
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

function AppAppBar(props) {
  const { classes } = props
  const { site, file } = useSiteMetadata()
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Header
            absolute
            //color="transparent"
            brand={site.siteMetadata.title}
            logo={file.childImageSharp.fixed.src}
            rightLinks={
              <HeaderLinks
                links={[
                  { link: "/", text: "Home" },
                  { link: "/need-load", text: "Find Load" },
                  { link: "/load-board", text: "Load Board" },
                  { link: "/contact-page", text: "Contact" },
                  { link: "/about", text: "About" },
                  { link: "/SignIn", text: "Log In" },
                ]}
              />
            }
          />
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppAppBar)
