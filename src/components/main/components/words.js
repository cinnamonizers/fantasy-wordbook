import React from 'react';

import { getLocalStorage } from '../functions/localstorage.js';
import wordObjSlicer from '../functions/word-obj-slicer.js';
import wordObjBuilder from '../functions/word-obj-builder.js';

export default class WordsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  setter = () => {
    let wordsArr = getLocalStorage('wordObj');
    if(wordsArr === null){
      return (
        <h1 className="defSynExStyle">Please select some words and come back later!</h1>
      )
    } else {
      return (
        wordsArr.map((wordStored, idx) => {
          let def = [], syn = [], exmp = [];
          let sansk = wordStored.sanskrit;
          let translit = wordStored.transliteration;
  
          def.push(wordStored.definitions);
          syn.push(wordStored.synonyms);
          exmp.push(wordStored.examples);
          
          def = wordObjSlicer(def[0]);
          syn = wordObjSlicer(syn[0]);
          exmp = wordObjSlicer(exmp[0]);
  
          if(sansk === null){
            let classSet = 'defSynExStyle hide';
            return (
              wordObjBuilder(
                wordStored.word,
                wordStored.quote,
                def,
                syn,
                exmp,
                classSet,
                idx
              )
            );
          } else {
            let classSet = 'defSynExStyle';
            return (
              wordObjBuilder(
                wordStored.word,
                wordStored.quote,
                def,
                syn,
                exmp,
                classSet,
                idx,
                sansk,
                translit
              )
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
