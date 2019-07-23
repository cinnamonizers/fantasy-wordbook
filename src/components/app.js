import React from "react";
import { BrowserRouter } from "react-router-dom";

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
        <header className="container">
          <Header />
        </header>
        <main className="container">
          <Main />
        </main>
        <footer className="container">
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}
