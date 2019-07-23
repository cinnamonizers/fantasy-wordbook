import React from "react";
import superagent from "superagent";

import Quotes from "./quotes.js";
import Definitions from "./definitions.js";
import DropDown from "./drop-down.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BACKEND_URL: "https://fantasy-wordbook-backend.herokuapp.com",
      view: "landing",
      worldName: ["The Lord of the Rings"],
      movieNames: [
        "The Fellowship of the Ring",
        "The Two Towers",
        "The Return of the King"
      ],
      movieId: [
        "5cd95395de30eff6ebccde5c",
        "5cd95395de30eff6ebccde5b",
        "5cd95395de30eff6ebccde5d"
      ],
      quote:
        "This is a quote which needs to be split and then reassigned into spans",
      wordChosen: "",
      movieQuote: {}
    };
  }

  quoteSet = async e => {
    e.preventDefault();
    console.log("I'm happening");
    const theOne = await superagent
      .get(`${this.state.BACKEND_URL}/quotes`)
      .query({ data: e });
    this.setState({ movieQuote: theOne.body });
    console.log(this.state.movieQuote);
  };

  quoteClicker = e => {
    e.preventDefault();
    this.setState({ wordChosen: e.target.textContent });
  };

  landingPage = view => {
    if (view === "landing") {
      return (
        <React.Fragment>
          <select>{DropDown(this.state.worldName)}</select>
          <select onChange={this.quoteSet}>
            {DropDown(this.state.movieNames)}
          </select>
          {Quotes(this.state.quote, this.quoteClicker)}
          {Definitions(this.state.wordChosen)}
        </React.Fragment>
      );
    } else if (view === "selector") {
      return (
        <React.Fragment>
          <select onChange={this.quoteSet}>
            {DropDown(this.state.movieNames)}
          </select>
          {Quotes(this.state.quote, this.quoteClicker)}
          {Definitions()}
        </React.Fragment>
      );
    } else if (view === "quotes") {
      return (
        <React.Fragment>
          {Quotes(this.state.quote, this.quoteClicker)}
        </React.Fragment>
      );
    } else if (view === "words") {
      return <React.Fragment>{Definitions()}</React.Fragment>;
    } else if (view === "about-us") {
      return null;
    }
  };

  render() {
    return <React.Fragment>{this.landingPage(this.state.view)}</React.Fragment>;
  }
}
