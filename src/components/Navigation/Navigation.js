import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../header/header"
import HeaderLinks from "../header/header-links"
import Logo from "../../images/pbt-logoS-Standard-crop.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // paddingLeft: '32px',
    // paddingRight: '32px',
    // width: '100% !important',
    color: theme.palette.primary.dark,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #0ABFBC 90%)',
    // background: 'linear-gradient(to bottom, #1565C0, #b92b27)',
    background: theme.palette.primary.dark,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // background: theme.palette.primary.dark,
    padding: "0",
  },
}))

// const logoComponent = ({ data }) =>

function Navigation(props) {
  const classes = useStyles()
  // const imgSrc = props.data.file.childImageSharp.fixed.src

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header
        fixed
        color="transparent"
        brand="TermoNik"
        logo={Logo}
        changeColorOnScroll={{
          height: 400,
          color: "primary",
        }}
        className={classes.title}
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
    </div>
  )
}

export default Navigation
