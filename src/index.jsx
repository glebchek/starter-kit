// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "./app.jsx";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<App name="world"/>, root);
}
