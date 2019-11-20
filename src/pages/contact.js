import withRoot from "../modules/withRoot"
import React from "react"
import Layout from "../components/layout"
import AppForm from "../modules/views/AppForm"

const ContactFormPage = () => (
  <Layout>
    <AppForm />
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
  </Layout>
)
export default withRoot(ContactFormPage)
