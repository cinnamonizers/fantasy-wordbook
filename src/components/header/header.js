import React from "react";

import Nav from "./nav.js";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>Fantasy Wordbook</h1>
        <Nav />
      </React.Fragment>
    );
  }
}
