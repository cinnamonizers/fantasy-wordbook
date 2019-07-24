import React from 'react';
import ListBuilder from '../functions/definitions-builder.js';
import wordObjSlicer from '../functions/word-obj-slicer.js';

export default function Definitions(wordChosen, currentQuote, definition) {
  const quote = [];
  let def = [];
  let syn = [];
  let exmp = [];

  quote.push(currentQuote);
  def.push(definition[1]);
  syn.push(definition[2]);
  exmp.push(definition[0]);

  def = wordObjSlicer(def[0]);
  syn = wordObjSlicer(syn[0]);
  exmp = wordObjSlicer(exmp[0]);

  return (
    <React.Fragment>
      <div className='definitionsBox'>
        <ul className='categoryStyle'>
          <li className='defSynExStyle'>Quote: "{quote[0].innerText}"</li>
          <li>******************</li>
          <li className='defSynExStyle'>Word Chosen: {wordChosen}</li>
          {ListBuilder('Definitions:', def)}
          {ListBuilder('Synonyms:', syn)}
          {ListBuilder('Examples:', exmp)}
        </ul>
      </div>
    </React.Fragment>
  );
}
