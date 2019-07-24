import React from "react";
import ListBuilder from "../functions/definitions-builder";

export default function Definitions(wordChosen, currentQuote, definition) {
  const arr = [];
  arr.push(currentQuote);

  return (
    <React.Fragment>
      <div className="definitionsBox" >
        <ul className="categoryStyle">
          <li className="defSynExStyle">Quote: "{arr[0].innerText}"</li>
          <li>******************</li>
          <li className="defSynExStyle">Word Chosen: {wordChosen}</li>
          {ListBuilder("Definitions:", definition[1])}
          {ListBuilder("Synonyms:", definition[2])}
          {ListBuilder("Examples:", definition[0])}
        </ul>
      </div>
    </React.Fragment>
  );
}
