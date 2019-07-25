import React from 'react';

import { getLocalStorage } from '../functions/localstorage.js';
import wordObjSlicer from '../functions/word-obj-slicer.js';
import listBuilder from '../functions/definitions-builder.js';

export default class WordsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  setter = () => {
    let wordsArr = getLocalStorage('wordObj');
    return (
      wordsArr.map((wordStored, idx) => {
        let def = [];
        let syn = [];
        let exmp = [];

        def.push(wordStored.definitions);
        syn.push(wordStored.synonyms);
        exmp.push(wordStored.examples);

        def = wordObjSlicer(def[0]);
        syn = wordObjSlicer(syn[0]);
        exmp = wordObjSlicer(exmp[0]);

        return (
<<<<<<< HEAD
          <div className='wordBox'>
            <div key={idx}>
              <li className="defSynExStyle">Word Chosen: {wordStored.word}</li>
              <li>******************</li>
              <li>Quote: "{wordStored.quote}"</li>
              {ListBuilder('Definitions:', def)}
              {ListBuilder('Synonyms:', syn)}
              {ListBuilder('Examples:', exmp)}
            </div>
=======
          <div className='definitionBox' key={idx}>
            <li>Word Chosen: {wordStored.word}</li>
            <li>******************</li>
            <li>Quote: "{wordStored.quote}"</li>
            {listBuilder('Definitions:', def)}
            {listBuilder('Synonyms:', syn)}
            {listBuilder('Examples:', exmp)}
>>>>>>> cb8818442d897b2cb0b5429078d7634d1260639f
          </div>
        )
      })
    )
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.setter()};
        </ul>
      </React.Fragment>
    )
  }
}