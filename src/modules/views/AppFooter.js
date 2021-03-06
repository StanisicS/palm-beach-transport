import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import Container from "@material-ui/core/Container"
import Typography from "../components/Typography"
import TextField from "../components/TextField"

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        www.evansit.rs
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}))

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "FranÃ§ais",
  },
]

export default function AppFooter() {
  const classes = useStyles()

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              {/* <Grid item className={classes.icons}>
                <a href="https://material-ui.com/" className={classes.icon}>
                  <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/MaterialUI" className={classes.icon}>
                  <img src="/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
                </a>
              </Grid> */}
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Quick Links
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/need-load/">Truck Empty Need Load?</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Support
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a href="mailto:support@palmbeachtrans.com">
                  support@palmbeachtrans.com
                </a>
                <br />
              </li>
              <li className={classes.listItem}>
                <a href="tel:561-264-3410">561-264-3410</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
