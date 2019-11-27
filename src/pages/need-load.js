import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact"
import Layout from "../components/layout"
import styled from "styled-components"
import { Header } from "gatsby-theme-material-foundry"

const Kanta = styled.div`
  margin: 7rem auto;
  padding: 1px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NeedLoadFormPage = () => (
  <Layout>
    <Kanta>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <br />
            <form
              name="Custom Form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Custom Form" />
              <p className="h4 text-center mb-4">Truck Empty I Need Load</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Customer Name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Email Address
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultRegisterPhonePassword"
                className="grey-text"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="defaultRegisterPhonePassword"
                class="form-control"
                aria-describedby="defaultRegisterFormPhoneHelpBlock"
              />
              <br />
              <label for="textInput" className="grey-text">
                Company Name or MC# Number
              </label>
              <input type="text" id="textInput" class="form-control mb-4" />
              <label for="select" className="grey-text">
                Type of Trailer
              </label>
              <select class="browser-default custom-select mb-4" id="select">
                <option value="" disabled="" selected="">
                  Choose your option
                </option>
                <option value="dry van">DRY VAN</option>
                <option value="reefer">REEFER</option>
                <option value="flatbed">FLATBED</option>
                <option value="step deck">STEP DECK</option>
                <option value="lowboy">LOWBOY</option>
                <option value="hotshop">HOTSHOP</option>
                <option value="strait box">STRAIT BOX</option>
              </select>
              <label for="textInput" className="grey-text">
                Where are you? City or ZIP code
              </label>
              <input type="text" id="textInput" class="form-control mb-4" />
              <label for="select" className="grey-text">
                US State Location Truck is Now
              </label>
              <select class="browser-default custom-select mb-4" id="select">
                <option value="" disabled="" selected="">
                  Choose your option
                </option>
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="district of columbia">
                  District of Columbia
                </option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="illinois">Illinois</option>
                <option value="indiana">Indiana</option>
                <option value="lowa">Lowa</option>
                <option value="kentucky">Kentucky</option>
                <option value="louisiana">Louisiana</option>
                <option value="maine">Maine</option>
                <option value="maryland">Maryland</option>
                <option value="missachusetts">Missachusetts</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nebraska">Nebraska</option>
                <option value="nevada">Nevada</option>
                <option value="new hampshire">New hampshire</option>
                <option value="new jersey">New jersey</option>
                <option value="new mexico">New mexico</option>
                <option value="new york">New york</option>
                <option value="north carolina">Kansas</option>
                <option value="north dakota">North Dakota</option>
                <option value="ohio">Ohio</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="oregon">Oregon</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="rhode island">Rhode Island</option>
                <option value="south carolina">South Carolina</option>
                <option value="south dakota">South Dakota</option>
                <option value="tennessee">Tennessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="vermont">Vermont</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="west virginia">West Virginia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="wyoming">Wyoming</option>
              </select>
              <label for="textarea" className="grey-text">
                Where do you want to go?
              </label>
              <textarea id="textarea" class="form-control mb-4"></textarea>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultRegisterFormNewsletter"
                />
                <label
                  class="custom-control-label"
                  for="defaultRegisterFormNewsletter"
                >
                  Subscribe to our newsletter
                </label>
              </div>
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Submit{" "}
                  <MDBIcon far icon="fas fa-check" className="fas fa-check" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Kanta>
  </Layout>
)

export default NeedLoadFormPage
