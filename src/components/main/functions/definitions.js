import React from 'react';
import listBuilder from './definitions-builder.js';
import wordObjSlicer from './word-obj-slicer.js';
import { setLocalStorage } from './localstorage.js';

export default function definitions(wordChosen, currentQuote, definition) {
  const quote = [];
  let def = [];
  let syn = [];
  let exmp = [];

  quote.push(currentQuote);
  def.push(definition[1]);
  syn.push(definition[2]);
  exmp.push(definition[0]);

  let quoteSeen = quote[0].children[0].children[0].innerText;
  let sanskritSeen = quote[0].children[0].children[1].innerText;
  let translitSeen = quote[0].children[0].children[2].innerText;

  console.log(quote[0].children[0].children[1].innerText);
  console.log(quote[0].children[0].children[2].innerText);
  setLocalStorage('sanskrit', quote[0].children[0].children[1].innerText);
  setLocalStorage('transliteration', quote[0].children[0].children[2].innerText);


  def = wordObjSlicer(def[0]);
  syn = wordObjSlicer(syn[0]);
  exmp = wordObjSlicer(exmp[0]);
  if(sanskritSeen === ''){
    console.log('LOTR');
    return (
      <React.Fragment>
        <div className='definitionsBox'>
          <ul className='categoryStyle'>
            <li className='defSynExStyle'>Word Chosen: {wordChosen}</li>
            <li>******************</li>
            <li className='defSynExStyle'>Quote: "{quote[0].innerText}"</li>
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
            <li className='defSynExStyle'>Word Chosen: {wordChosen}</li>
            <li>******************</li>
            <li className='defSynExStyle'>Quote: "{quoteSeen}"</li>
            <li className='defSynExStyle'>Sanskrit: "{sanskritSeen}"</li>
            <li className='defSynExStyle'>Transliteration: "{translitSeen}"</li>
            {listBuilder('Definitions:', def)}
            {listBuilder('Synonyms:', syn)}
            {listBuilder('Examples:', exmp)}
          </ul>
        </div>
      </React.Fragment>
    );
  }
  
}
