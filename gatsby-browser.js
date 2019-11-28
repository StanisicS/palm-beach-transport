import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

const netlifyIdentity = require("netlify-identity-widget")

import React from "react"
export function onRenderBody({
  setHeadComponents,
  setPostBodyComponents,
  setPreBodyComponents,
}) {
  setHeadComponents([
    <script
      type="text/javascript"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    ></script>,
  ])
  setPreBodyComponents([<div data-netlify-identity-menu></div>])
  setPostBodyComponents([
    <div data-netlify-identity-button>Login with Netlify Identity</div>,
  ])
}