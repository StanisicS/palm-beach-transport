import React from "react"
import Layout from "../components/layout"
import AppForm from "../modules/views/AppForm"

const ContactUsFormPage = () => (
  <Layout>
      <h5 class="card-header info-color white-text text-center py-4">
        <strong>Contact us</strong>
      </h5>
      <form
        class="md-form"
        name="Contact Form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />

        <input type="text" id="materialContactFormName" class="form-control" />
        <label for="materialContactFormName">Name</label>

        <input
          type="email"
          id="materialContactFormEmail"
          class="form-control"
        />
        <label for="materialContactFormEmail">E-mail</label>

        <textarea
          type="text"
          id="materialContactFormMessage"
          class="form-control md-textarea"
          rows="3"
        ></textarea>
        <label for="materialContactFormMessage">Message</label>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="materialContactFormCopy"
          />
          <label class="form-check-label" for="materialContactFormCopy">
            Send me a copy of this message
          </label>
        </div>

        <button
          class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect"
          type="submit"
        >
          Send
        </button>
      </form>
  </Layout>
)

export default ContactUsFormPage
