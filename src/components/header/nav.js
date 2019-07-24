import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ["Home", "Words Searched", "About Us"]
    };
  }

  defaulter = e => e.preventDefault();

  render() {
    return (
      <React.Fragment>
        <nav >
          <Link to="/">
            <button>{this.state.menu[0]}</button>
          </Link>
          <Link to="/words-searched">
            <button>{this.state.menu[1]}</button>
          </Link>
          <Link to="/about-us">
            <button>{this.state.menu[2]}</button>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
