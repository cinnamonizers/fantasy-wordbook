import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./header/header.js";
import Main from "./main/components/main.js";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <header >
          <Header />
        </header>
        <main  >
          <Main />
        </main>
      </BrowserRouter >
    );
  }
}
