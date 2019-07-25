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
    console.log(wordsArr);
    if(wordsArr === null){
      return (
        <h1 className="defSynExStyle">Please select some words and come back later!</h1>
      )
    } else {
      return (
        wordsArr.map((wordStored, idx) => {
          let def = [];
          let syn = [];
          let exmp = [];
          let sansk = wordStored.sansktrit;
          let translit = wordStored.transliteration;
  
          def.push(wordStored.definitions);
          syn.push(wordStored.synonyms);
          exmp.push(wordStored.examples);
          
          def = wordObjSlicer(def[0]);
          syn = wordObjSlicer(syn[0]);
          exmp = wordObjSlicer(exmp[0]);
  
          if(sansk === null){
            console.log('LOTR');
            return (
              <React.Fragment>
                <div className='definitionsBox'>
                  <ul className='categoryStyle'>
                    <li className='defSynExStyle'>Word Chosen: {wordStored.word}</li>
                    <li>******************</li>
                    <li className='defSynExStyle'>Quote: "{wordStored.quote}"</li>
                    {listBuilder('Definitions:', def)}
                    {listBuilder('Synonyms:', syn)}
                    {listBuilder('Examples:', exmp)}
                  </ul>
                </div>
              </React.Fragment>
            );
          } else {
            console.log('Bhaga');
            return (
              <React.Fragment>
                <div className='definitionsBox'>
                  <ul className='categoryStyle'>
                    <li className='defSynExStyle'>Word Chosen: {wordStored.word}</li>
                    <li>******************</li>
                    <li className='defSynExStyle'>Quote: "{wordStored.quote}"</li>
                    <li className='defSynExStyle'>Sanskrit: "{sansk}"</li>
                    <li className='defSynExStyle'>Transliteration: "{translit}"</li>
                    {listBuilder('Definitions:', def)}
                    {listBuilder('Synonyms:', syn)}
                    {listBuilder('Examples:', exmp)}
                  </ul>
                </div>
              </React.Fragment>
            );
          }
        })
      )
    } 
  }

  render() {
    return (
      <div className='wordScrollBox'>        
          {this.setter()}
      </div>
    )
  }
}
