import React from "react";
import superagent from "superagent";

import DropDown from "./drop-down.js";
import Definitions from "./definitions";
import Quotes from "./quotes.js";
import MainBuilder from "./main-builder.js";

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      BACKEND_URL: "https://fantasy-wordbook-cinnamonizer.herokuapp.com",
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
      wordChosen: null,
      words: []
    }
  }

  randomInclusiveNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  quoteSet = async e => {
    e.preventDefault();
    let movieChosen = e.target.value;
    let dropDownValue = this.state.dropDownValue;
    console.log("movie choice:", movieChosen);
    console.log("dropdown value:", dropDownValue);

    const movies = await superagent.get(`${this.state.BACKEND_URL}/movies`).query({data: e.body});
    console.log(movies.body);

    if(movieChosen !== dropDownValue){
      console.log("I'm in!");
      const theOne = await superagent
        .get(`${this.state.BACKEND_URL}/quotes`)
        .query({ data: movieChosen });
      this.setState({ 
        dropDownValue: movieChosen, 
        movieQuote: theOne.body });
    }
  };

  definitionSet = async e => {
    let theWord;
    let target = e.currentTarget;
    let wordChosen = e.target.textContent;
    const regex = /\W+/;

    wordChosen = wordChosen.toLowerCase().replace(regex, "");
    
    if(wordChosen !== this.state.wordChosen){
      theWord = await superagent
        .get(`${this.state.BACKEND_URL}/words`)
        .query({data: wordChosen}); 
      this.setState({
        wordChosen: wordChosen,
        currentQuote: target,
        words: theWord.body
      });
    }
  }

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
          <MainBuilder
            display={this.quoteDisplay}
            quote={this.state.movieQuote} 
            current={this.state.currentQuote} 
            grabber={this.quoteGrabber}
            definition={this.definitionSet}
            clicker={this.clicker}
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
            display={this.quoteDisplay}
            quote={this.state.movieQuote} 
            current={this.state.currentQuote} 
            grabber={this.quoteGrabber}
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
