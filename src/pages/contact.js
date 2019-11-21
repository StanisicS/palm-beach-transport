import withRoot from "../modules/withRoot"
// --- Post bootstrap -----
import React from "react"
import { Field, Form, FormSpy } from "react-final-form"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Typography from "../modules/components/Typography"
import AppFooter from "../modules/views/AppFooter"
import AppAppBar from "../modules/views/AppAppBar"
import AppForm from "../modules/views/AppForm"
import { email, required } from "../modules/form/validation"
import RFTextField from "../modules/form/RFTextField"
import FormButton from "../modules/form/FormButton"
import FormFeedback from "../modules/form/FormFeedback"

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}))

const ContactFormPage = () => (
  <AppForm>
    <Typography variant="h3" gutterBottom marked="center" align="center">
      Contact Us
    </Typography>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Field
        autoComplete="email"
        autoFocus
        component={RFTextField}
        disabled={submitting || sent}
        fullWidth
        label="Email"
        margin="normal"
        name="email"
        required
        size="large"
      />
      <Field
        fullWidth
        size="large"
        component={RFTextField}
        disabled={submitting || sent}
        required
        name="password"
        autoComplete="current-password"
        label="Password"
        type="password"
        margin="normal"
      />
      <FormButton
        className={classes.button}
        disabled={submitting || sent}
        size="large"
        color="secondary"
        fullWidth
      >
        Send
      </FormButton>
    </form>
  </AppForm>
)
export default ContactFormPage
