import React from "react";
import superagent from "superagent";

import DropDown from "../functions/drop-down.js";
import Definitions from "./definitions.js";
import Quotes from "../functions/quotes.js";
import MainBuilder from "./main-builder.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BACKEND_URL: "https://fantasy-wordbook-cinnamonizer.herokuapp.com",
      view: "landing",
      worldName: ["The Lord of the Rings"],
      movieNames: null,
      movieQuote: [],
      currentQuote: null,
      dropDownValue: null,
      wordChosen: null,
      words: []
    }
  }

  randomInclusiveNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  movieTitlesSet = async e => {
    e.preventDefault();

    let world = e.target.value;

    if (world === this.state.worldName[0]) {
      const movies = await superagent
        .get(`${this.state.BACKEND_URL}/movies`)
        .query({ data: e.body });

      let movieArr = movies.body.map(movie => movie.movie_name);
      let temp = movieArr[0];
      movieArr[0] = movieArr[1];
      movieArr[1] = temp;
      this.setState({ movieNames: movieArr });
    }
    this.setState({ view: "selector" });
  }

  quoteSet = async e => {
    e.preventDefault();

    let movieChosen = e.target.value;
    let dropDownValue = this.state.dropDownValue;

    if (movieChosen !== dropDownValue) {
      const theOne = await superagent
        .get(`${this.state.BACKEND_URL}/quotes`)
        .query({ data: movieChosen });

      this.setState({
        dropDownValue: movieChosen,
        movieQuote: theOne.body
      });
    }
  };

  definitionSet = async e => {
    e.preventDefault();

    let theWord;
    let target = e.currentTarget;
    let wordChosen = e.target.textContent;
    const regex = /\W+/;

    wordChosen = wordChosen.toLowerCase().replace(regex, "");

    if (wordChosen !== this.state.wordChosen) {
      theWord = await superagent
        .get(`${this.state.BACKEND_URL}/words`)
        .query({ data: wordChosen });
      this.setState({
        wordChosen: wordChosen,
        currentQuote: target,
        words: theWord.body
      });
    }
  }

  quoteDisplay = objectList => {
    if (objectList.length !== 0) {
      let ranNum = this.randomInclusiveNumGen(0, objectList.length);
      let ranQuote = objectList[ranNum].movie_name;
      console.log(ranQuote);
      if (ranQuote !== undefined) {
        let movie = objectList[ranNum].movie_name;
        let dropValue = this.state.dropDownValue;
        if (movie === dropValue) {
          return Quotes(objectList[ranNum].quote);
        }
      }
    }
  }

  landingPage = view => {
    if (view === "landing") {
      return (
        <select className="movieDropdown" onChange={this.movieTitlesSet}>
          <option>Choose a Universe to Explore</option>
          {DropDown(this.state.worldName)}
        </select>
      );
    } else if (view === "selector") {
      return (
        <React.Fragment>
          <select className="movieDropdown" onChange={this.quoteSet}>
            <option>Choose a movie to get quotes from</option>
            {DropDown(this.state.movieNames)}
          </select>
          <MainBuilder
            definition={this.definitionSet}
            display={this.quoteDisplay}
            quote={this.state.movieQuote}
          />
          {this.state.worldChosen !== null && this.state.currentQuote !== null && (
            Definitions(this.state.wordChosen, this.state.currentQuote, this.state.words)
          )}
        </React.Fragment>
      );
    } else if (view === "quotes") {
      return (
        <React.Fragment>
          <MainBuilder
            definition={this.definitionSet}
            display={this.quoteDisplay}
            quote={this.state.movieQuote}
          />
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
