import wordObjSlicer from './word-obj-slicer.js';
import wordObjBuilder from './word-obj-builder.js';

export default function definitions(wordChosen, currentQuote, definition) {
  let quote = [], def = [], syn = [], exmp = [];

  quote.push(currentQuote);
  def.push(definition[1]);
  syn.push(definition[2]);
  exmp.push(definition[0]);

  let quoteSeen = quote[0].children[0].children[0].innerText;
  let sanskritSeen = quote[0].children[0].children[1].innerText;
  let translitSeen = quote[0].children[0].children[2].innerText;

  console.log(translitSeen);

  def = wordObjSlicer(def[0]);
  syn = wordObjSlicer(syn[0]);
  exmp = wordObjSlicer(exmp[0]);

  if(sanskritSeen === ''){
    let classSet = 'defSynExStyle hide';
    return (
      wordObjBuilder(
        wordChosen,
        quote[0].innerText,
        def,
        syn,
        exmp,
        classSet
      )
    );
  } else {
    let classSet = 'defSynExStyle';
    return (
      wordObjBuilder(
        wordChosen,
        quoteSeen,
        def,
        syn,
        exmp,
        classSet,
        null,
        sanskritSeen,
        translitSeen
      )
    );
  } 
}
