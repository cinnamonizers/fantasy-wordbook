import React from "react";

import Body from "./body.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <React.Fragment><Body /></React.Fragment>;
  }
}
