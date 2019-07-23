import React from "react";

export default function Definitions(wordChosen, currentQuote) {
  const arr = [];
  arr.push(currentQuote);  
  
  const regex = /\W+/;
  if(wordChosen !== null){
    wordChosen = wordChosen.toLowerCase().replace(regex, "");
    if(wordChosen.match(regex)){
    }
  }
  return (
    <React.Fragment>
      <div className="definitionsBox">
        <ul>
          <li>{arr[0].innerText}</li>
          <li>{wordChosen}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
