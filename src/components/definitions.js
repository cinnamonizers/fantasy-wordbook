import React from "react";

export default function Definitions(wordChosen, currentQuote, definition) {
  console.log("word object:", definition);
  const arr = [];
  arr.push(currentQuote);

  return (
    <React.Fragment>
      <div className="definitionsBox">
        <ul>
          <li className="categoryStyle">Quote: "{arr[0].innerText}"</li>
          <li>******************</li>
          <li className="categoryStyle">Word Chosen: {wordChosen}</li>
          <li className="categoryStyle">Definitions:
            <ul>
              {definition[1].map((def, idx) => {
                return <li key={idx}>{def}</li>
              })}
            </ul>
          </li>
          <li className="categoryStyle">Synonyms:
              <ul>
              {definition[2].map((syn, idx) => {
                return <li key={idx}>{syn}</li>
              })}
            </ul>
          </li>
          <li className="categoryStyle">Examples:
            <ul>
              {definition[0].map((example, idx) => {
                return <li key={idx}>{example}</li>
              })}
            </ul>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
