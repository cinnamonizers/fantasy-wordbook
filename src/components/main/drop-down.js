import React from "react";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieNames: [
        "The Unexpected Journey",
        "The Desolation of Smaug",
        "The Battle of the Five Armies",
        "The Two Towers",
        "The Fellowship of the Ring",
        "The Return of the King"
      ]
    };
  }
}
