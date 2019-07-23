import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: ["About Us"]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Link to="/about-us">About Us</Link>
      </React.Fragment>
    );
  }
}
