import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app.js";

import "./styling/reset.css";
import "./styling/base.css";
import "./styling/modules.css";
import "./styling/layouts.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
