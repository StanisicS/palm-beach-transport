import React from "react"
import Layout from "../components/layout"
import AppForm from "../modules/views/AppForm"
import Typography from "../modules/components/Typography"
import TextField from "@material-ui/core/TextField"
import RFTextField from "../modules/form/RFTextField"
import { Button } from "gatsby-theme-material-foundry"

const ContactFormPage = () => (
  <Layout>
    <AppForm>
      <Typography variant="h3" gutterBottom marked="center" align="center">
        Contact us
      </Typography>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <Field
          autoComplete="email"
          autoFocus
          component={RFTextField}
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          required
          size="small"
        />
        <Field
          autoFocus
          component={RFTextField}
          fullWidth
          label="Message"
          margin="normal"
          name="message"
          required
          size="large"
          type="text"
        />
        <Button type="submit">Sent</Button>
      </form>
    </AppForm>
  </Layout>
)
export default ContactFormPage
