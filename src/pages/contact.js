import withRoot from "../modules/withRoot"
import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "../modules/components/Typography"

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

const ContactFormPage = useStyles => (
  <Layout>
    <Typography>
      <h1>Contact</h1>

      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </Typography>
  </Layout>
)
export default withRoot(ContactFormPage)
