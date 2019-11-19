import React from "react"
import Layout from "../components/layout"

const NeedLoadFormPage = () => (
  <Layout>
    <h1>Track Empty Need Load?</h1>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label htmlFor="name">YOUR COMPANY NAME OR MC#, DOT#</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field">
        <label htmlFor="name">CUSTOMER NAME</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field">
        <label>PHONE NUMBER</label>
        <input type="tel" name="name" id="name" />
      </div>
      <div className="field">
        <label>TYPE OF TRAILER</label>
        <select name="trailer">
          <option value="dry van">DRY VAN</option>
          <option value="reefer">REEFER</option>
          <option value="flatbed">FLATBED</option>
          <option value="step deck">STEP DECK</option>
          <option value="lowboy">LOWBOY</option>
          <option value="hotshop">HOTSHOP</option>
          <option value="strait box">STRAIT BOX</option>
        </select>
      </div>
      <div className="field">
        <label>WHERE ARE YOU ? CITY OR ZIP CODE</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field">
        <label>US STATE LOCATION TRUCK IS NOW ?</label>
        <select name="location">
          <option value="alabama">Alabama</option>
          <option value="alaska">Alaska</option>
          <option value="arizona">Arizona</option>
          <option value="arkansas">Arkansas</option>
          <option value="california">California</option>
          <option value="colorado">Colorado</option>
          <option value="connecticut">Connecticut</option>
          <option value="district of columbia">District of Columbia</option>
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
      </div>
      <div className="field">
        <label>WHAT TIME YOUR TRUCK IS EMPTY ?</label>
        <input type="time" name="usr_time" id="name" />
      </div>
      <div className="field">
        <label htmlFor="message">WHERE YOU WANT TO GO?</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  </Layout>
)

export default NeedLoadFormPage
