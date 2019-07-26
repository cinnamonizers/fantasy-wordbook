import React from "react";

import listBuilder from '../functions/definitions-builder.js';

export default function wordObjBuilder(word, quote, def, syn, exmp, classSet, idx, sansk, translit) {
  return (
    <React.Fragment key={idx}>
      <div className='definitionsBox'>
        <ul className='categoryStyle'>
          <li className='defSynExStyle'>Word Chosen: {word}</li>
          <li>******************</li>
          <li className='defSynExStyle'>Quote: "{quote}"</li>
          <li className={classSet}>Sanskrit: "{sansk}"</li>
          <li className={classSet}>Transliteration: "{translit}"</li>
          {listBuilder('Definitions:', def)}
          {listBuilder('Synonyms:', syn)}
          {listBuilder('Examples:', exmp)}
        </ul>
      </div>
    </React.Fragment>
  )
}