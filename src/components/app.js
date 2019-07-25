import React from 'react';
import superagent from 'superagent';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header/components/header.js';
import randomInclusiveNumGen from './main/functions/ran-num-gen.js';
import dropDown from './main/functions/drop-down.js';
import definitions from './main/functions/definitions.js';
import quotes from './main/functions/quotes.js';
import MainBuilder from './main/components/main-builder.js';
import AboutUs from './main/components/about-us.js';
import { setLocalStorage, getLocalStorage } from './main/functions/localstorage.js';
import WordsPage from './main/components/words.js';

let wordObjLocalStorage = getLocalStorage('wordObj') || [];
let randNumArr = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BACKEND_URL: 'https://fantasy-wordbook-cinnamonizer.herokuapp.com',
      view: 'landing',
      worldName: ['The Lord of the Rings', 'Bhagavad Gita'],
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
      movieArr.unshift('Choose a movie to get quotes from');
      this.setState({ movieNames: movieArr });
    } else if (world === this.state.worldName[1]) {
      const chapters = await superagent
        .get(`${this.state.BACKEND_URL}/chapters`)
        .query({ data: e.body });
      let chapterArr = chapters.body.map(chapter => chapter.name_meaning);
      chapterArr.unshift('Choose a chapter to get verses from');
      this.setState({ movieNames: chapterArr });
    }
    this.setState({ view: 'selector' });
  }

  quoteSet = async e => {
    e.preventDefault();
    let movieChosen = e.target.value;
    let dropDownValue = this.state.dropDownValue;

    if (this.state.worldName[0]) {
      if (movieChosen !== dropDownValue) {
        const theOne = await superagent
          .get(`${this.state.BACKEND_URL}/quotes`)
          .query({ data: movieChosen });
        this.setState({
          dropDownValue: movieChosen,
          movieQuote: theOne.body
        });
      }
    } 
    // else if (this.state.worldName[1]) {
    //   if (movieChosen !== dropDownValue) {
    //     const theChapter = await superagent.get(`${this.state.BACKEND_URL}/verses`).query({ data: movieChosen });
    //     this.setState({
    //       dropDownValue: movieChosen,
    //       movieQuote: theChapter.body
    //     });
    //   }
    // }
    this.setState({ view: 'quotes' });
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
      if(theWord.body !== null){
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
      }
      wordObjLocalStorage.push(this.state.wordObj);
      setLocalStorage('wordObj', wordObjLocalStorage);
    }
  }

  quoteDisplay = objectList => {
    if (objectList.length !== 0) {
      let ranNum = randomInclusiveNumGen(0, objectList.length - 1);
      if (randNumArr.includes(ranNum)) {
        ranNum = randomInclusiveNumGen(0, objectList.length - 1);
      };
      randNumArr.push(ranNum);
      if (randNumArr.length === 5) {
        randNumArr = [];
      }
      let ranQuote = objectList[ranNum].movie_name;
      if (ranQuote !== undefined) {
        let movie = objectList[ranNum].movie_name;
        let dropValue = this.state.dropDownValue;
        if (movie === dropValue) {
          return quotes(objectList[ranNum].quote);
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

  homeLanding = () => {
    return (
      <React.Fragment>
        <header>
          <Header
            homeV={this.homeView}
            wordV={this.wordView}
            aboutV={this.aboutView}
          />
          <select className='movieDropdown' onChange={this.movieTitlesSet}>
            <option default='selected'>Choose a Universe to Explore</option>
            {dropDown(this.state.worldName)}
          </select>
        </header>
      </React.Fragment>
    )
  }

  landingPage = view => {
    if (view === 'landing') {
      return (
        <React.Fragment>
          <Route exact path='/' component={this.homeLanding} />
        </React.Fragment>
      );
    } else if (view === 'selector') {
      return (
        <React.Fragment>
          <header>
            <Header
              homeV={this.homeView}
              wordV={this.wordView}
              aboutV={this.aboutView}
            />
            <select className='movieDropdown' onChange={this.quoteSet}>
              {dropDown(this.state.movieNames)}
            </select>
          </header>
        </React.Fragment>
      );
    } else if (view === 'quotes') {
      return (
        <React.Fragment>
          <header>
            <Header
              homeV={this.homeView}
              wordV={this.wordView}
              aboutV={this.aboutView}
            />
            <select className='movieDropdown' onChange={this.quoteSet}>
              {dropDown(this.state.movieNames)}
            </select>
          </header>
          <main className='container'>
            <MainBuilder
              definition={this.definitionSet}
              display={this.quoteDisplay}
              quote={this.state.movieQuote}
            />
            {this.state.worldChosen !== null && this.state.currentQuote !== null && (
              definitions(this.state.wordChosen, this.state.currentQuote, this.state.words)
            )}
          </main>
        </React.Fragment>
      );
    } else if (view === 'words') {
      return (
        <React.Fragment>
          <header>
            <Header
              homeV={this.homeView}
              wordV={this.wordView}
              aboutV={this.aboutView}
            />
          </header>
          <main className='container'>
            <Route path='/words-searched' component={WordsPage} />
          </main>
        </React.Fragment>
      )
    } else if (view === 'about-us') {
      return (
        <React.Fragment>
          <header>
            <Header
              homeV={this.homeView}
              wordV={this.wordView}
              aboutV={this.aboutView}
            />
          </header>
          <main>
            <Route path='/about-us' component={AboutUs} />
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
