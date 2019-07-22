import React from "react";
import { BrowserRouter } from "react-router-dom";
import superagent from "superagent";

import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );
  }
}
