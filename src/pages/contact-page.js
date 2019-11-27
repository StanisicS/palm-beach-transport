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

const FormPage = () => {
  return (
    <Layout>
      <Kanta>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="name" className="grey-text">
                  Your name
                </label>
                <input type="text" name="name" id="name" />
                <br />
                <label htmlFor="email" className="grey-text">
                  Your email
                </label>
                <input type="text" name="email" id="email" />
                <br />
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  className="grey-text"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="defaultFormContactSubjectEx"
                  id="defaultFormContactSubjectEx"
                />
                <br />
                <label htmlFor="message" className="grey-text">
                  Your message
                </label>
                <textarea type="text" id="message" name="message" rows="3" />
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

export default FormPage
