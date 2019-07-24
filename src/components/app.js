import React from 'react';
import superagent from 'superagent';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/header.js';
import Nav from './header/nav.js';
import RandomInclusiveNumGen from './main/functions/ran-num-gen.js';
import DropDown from './main/functions/drop-down.js';
import Definitions from './main/components/definitions.js';
import Quotes from './main/functions/quotes.js';
import MainBuilder from './main/components/main-builder.js';
import AboutUs from './main/components/about-us.js';
import { setLocalStorage } from './main/functions/localstorage.js';
import wordsPage from './main/components/words.js';

/*
TODO:
2. Get local storage to propagate the words-searched route
3. Add random number check to ensure multiple quotes are not the same
4. Change all double quotes to single quotes
5. Review all files and refactor into further components and functions as needed
*/

let wordObjLocalStorage = JSON.parse(localStorage.getItem('wordObj')) || [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BACKEND_URL: 'https://fantasy-wordbook-cinnamonizer.herokuapp.com',
      view: 'landing',
      worldName: ['The Lord of the Rings'],
      movieNames: null,
      movieQuote: [],
      currentQuote: null,
      dropDownValue: null,
      wordChosen: null,
      words: [],
      wordObj: {
        word: null,
        quote: null,
        definitions: null,
        synonyms: null,
        examples: null
      }
    }
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
    this.setState({ view: 'selector' });
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

    wordChosen = wordChosen.toLowerCase().replace(regex, '');

    if (wordChosen !== this.state.wordChosen) {
      theWord = await superagent
        .get(`${this.state.BACKEND_URL}/words`)
        .query({ data: wordChosen });
      this.setState({
        wordChosen: wordChosen,
        currentQuote: target,
        words: theWord.body,
        wordObj: {
          word: wordChosen,
          quote: target.innerText,
          definitions: theWord.body[1],
          synonyms: theWord.body[2],
          examples: theWord.body[0]
        }
      });
      wordObjLocalStorage.push(this.state.wordObj);
      setLocalStorage("wordObj", wordObjLocalStorage);
    }
  }

  quoteDisplay = objectList => {
    if (objectList.length !== 0) {
      let ranNum = RandomInclusiveNumGen(0, objectList.length - 1);
      let ranQuote = objectList[ranNum].movie_name;
      if (ranQuote !== undefined) {
        let movie = objectList[ranNum].movie_name;
        let dropValue = this.state.dropDownValue;
        if (movie === dropValue) {
          return Quotes(objectList[ranNum].quote);
        }
      }
    }
  }

  homeView = e => {
    e.preventDefault();
    this.setState({ view: 'landing' });
  }

  wordView = e => {
    e.preventDefault();
    this.setState({ view: 'words' });
  }
  aboutView = e => {
    e.preventDefault();
    this.setState({ view: 'about-us' });
  }

  landingPage = view => {
    if (view === 'landing') {
      return (
        <React.Fragment>
          <header>
            <Header />
            {Nav(this.homeView, this.wordView, this.aboutView)}
            <select className='movieDropdown' onChange={this.movieTitlesSet}>
              <option default="selected">Choose a Universe to Explore</option>
              {DropDown(this.state.worldName)}
            </select>
          </header>
        </React.Fragment>
      );
    } else if (view === 'selector') {
      return (
        <React.Fragment>
          <header>
            <Header />
            {Nav(this.homeView, this.wordView, this.aboutView)}
            <select className='movieDropdown' onChange={this.quoteSet}>
              <option default="selected">Choose a movie to get quotes from</option>
              {DropDown(this.state.movieNames)}
            </select>
          </header>
          <main>
            <MainBuilder
              definition={this.definitionSet}
              display={this.quoteDisplay}
              quote={this.state.movieQuote}
            />
            {this.state.worldChosen !== null && this.state.currentQuote !== null && (
              Definitions(this.state.wordChosen, this.state.currentQuote, this.state.words)
            )}
          </main>
        </React.Fragment>
      );
    } else if (view === 'words') {
      return (
        <React.Fragment>
          <header>
            <Header />
            {Nav(this.homeView, this.wordView, this.aboutView)}
          </header>
          <main className='container'>
            <h1>Welcome to the words!</h1>
            {wordsPage()};
          </main>
        </React.Fragment>
      )
    } else if (view === 'about-us') {
      return (
        <React.Fragment>
          <header>
            <Header />
            {Nav(this.homeView, this.wordView, this.aboutView)}
          </header>
          <main className='container'>
            <AboutUs />
          </main>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <BrowserRouter>
        {this.landingPage(this.state.view)}
      </BrowserRouter >
    );
  }
}
