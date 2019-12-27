import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "45vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
  icon: {
    width: "17px",
    height: "17px",
    position: "relative",
    // top: '3px',
    bottom: "3px",
  },
  a: {
    // color: theme.palette.secondary.light,
    // textDecoration: "none",
    // backgroundColor: "transparent",
    "&:hover": {
      color: "#FCAB04",
    },
  },
  h: {},
}))

export default function StickyFooter() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MDBFooter
        className="page-footer font-small pt-0"
        style={{ marginTop: "auto", backgroundColor: "#19857B" }}
      >
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Termo Nik</strong>
              </h6>
              <hr
                className="amber accent-4 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "90px", height: "2px" }}
              />
              <p>
                Izvođenje termotehničkih instalacija svih vrsta grejanja i
                hlađenja.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Usluge</strong>
              </h6>
              <hr
                className="amber accent-4 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "90px", height: "2px" }}
              />
              <p>
                <a href="/usluge" className={classes.a}>
                  Grejanje
                </a>
              </p>
              <p>
                <a href="/usluge" className={classes.a}>
                  Hlađenje
                </a>
              </p>
              <p>
                <a href="/usluge" className={classes.a}>
                  Zavarivanje
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Linkovi</strong>
              </h6>
              <hr
                className="amber accent-4 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "90px", height: "2px" }}
              />
              <p>
                <a href="/o-nama" className={classes.a}>
                  O nama
                </a>
              </p>
              <p>
                <a href="/galerija" className={classes.a}>
                  Galerija
                </a>
              </p>
              <p>
                <a href="/kontakt" className={classes.a}>
                  Pišite nam
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Kontakt</strong>
              </h6>
              <hr
                className="amber accent-4 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "90px", height: "2px" }}
              />
              <p>
                <i className="fa fa-home mr-3" style={{ color: "#FCAB04" }} />{" "}
                8. Marta 18a, 11130 Beograd
              </p>
              <p>
                <i
                  className="fa fa-envelope mr-3"
                  style={{ color: "#FCAB04" }}
                />{" "}
                <a href="mailto:office@termonik.rs">office@termonik.rs</a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" style={{ color: "#FCAB04" }} />
                <a href="tel:+381 69 163 19 89">+381 69 163 19 89</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "#234E47" }}
        >
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Termo Nik | Sva prava zadržana |
            Made with <FavoriteBorderIcon className={classes.icon} /> by{" "}
            <a href="/" className={classes.a} target="_blank">
              {"<Evansit />"}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  )
}

// 		<div className={classes.root}>
// 			<CssBaseline />
// 			<Container component='main' className={classes.main} maxWidth='sm'>
// 				<Typography variant='h2' component='h1' gutterBottom>
// 					Sticky footer
// 				</Typography>
// 				<Typography variant='h5' component='h2' gutterBottom>
// 					{"Pin a footer to the bottom of the viewport."}
// 					{"The footer will move as the main element of the page grows."}
// 				</Typography>
// 				<Typography variant='body1'>Sticky footer placeholder.</Typography>
// 			</Container>
// 			<footer className={classes.footer}>
// 				<Container maxWidth='sm'>
// 					<Typography variant='body1'>My sticky footer can be found here.</Typography>
// 					<Copyright />
// 				</Container>
// 			</footer>
// 		</div>
// 	)
// }
