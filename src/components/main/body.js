import React from "react";
import superagent from "superagent";

import DropDown from "./drop-down.js";
import Definitions from "./definitions";
import Quotes from "./quotes.js";

export default class Body extends React.Component {
  constructor(props){
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
      movieQuote: [],
      currentQuote: null,
      dropDownValue: null,
      wordChosen: null
    }
  }

  randomInclusiveNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  quoteSet = async e => {
    e.preventDefault();
    console.log('dropdown value:', e.target.value);
    this.setState({dropDownValue: e.target.value});

    const theOne = await superagent
      .get(`${this.state.BACKEND_URL}/quotes`)
      .query({ data: e.body });
    this.setState({ movieQuote: theOne.body });
  };

  quoteClicker = e => {
    e.preventDefault();
    this.setState({ wordChosen: e.target.textContent });
  };

  quoteDisplay = objectList => {
    if(objectList.length !==0){
      let ranNum = this.randomInclusiveNumGen(0, objectList.length);
        if(objectList[ranNum].movie_name === this.state.dropDownValue){
          return Quotes(objectList[ranNum].quote, this.quoteClicker);
        }
    }
  }

  viewSelector = e => {
    e.preventDefault();
    this.setState({view: "selector"});
  }

  quoteGrabber = e => {
    this.setState({currentQuote: e.currentTarget});
  }

  quoteForWordGrabbed = e => {
    return (
      <React.Fragment>
        {e}
      </React.Fragment>
    );
  }

  landingPage = view => {
    if (view === "landing") {
      return (
        <select onChange={this.viewSelector}>
          <option>Choose a Universe to Explore</option>
          {DropDown(this.state.worldName)}
        </select>
      );
    } else if (view === "selector") {
      return (
        <React.Fragment>
          <select onChange={this.quoteSet}>
            <option>Choose a movie to get quotes from</option>
            {DropDown(this.state.movieNames)}
          </select>
          <div data-id="1" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="2" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="3" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="4" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="5" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          {this.state.worldChosen !== null && this.state.currentQuote !== null && (
            Definitions(this.state.wordChosen, this.state.currentQuote)
          )}
        </React.Fragment>
      );
    } else if (view === "quotes") {
      return (
        <React.Fragment>
          <div data-id="1" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="2" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="3" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="4" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
          <div data-id="5" onClick={this.quoteGrabber}>
            {this.quoteDisplay(this.state.movieQuote)}
          </div>
        </React.Fragment>
      );
    } else if (view === "words") {
      return <React.Fragment>{Definitions()}</React.Fragment>;
    } else if (view === "about-us") {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.landingPage(this.state.view)}
      </React.Fragment>
    );
  }
}
