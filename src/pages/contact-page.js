import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import styled from "styled-components"

const Kanta = styled.div`
  margin: 7rem auto;
  padding: 1px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Kanta>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control"
                  onChange={handleChange}
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormContactEmailEx"
                  className="form-control"
                  onChange={handleChange}
                />
                <br />
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  className="grey-text"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                  onChange={handleChange}
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                />
                <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Kanta>
    </Layout>
  )
}
