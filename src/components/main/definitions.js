import React from "react";

export default function Definitions(wordChosen) {
  return (
    <React.Fragment>
      <div className="definitionsBox">
        <ul>
          <li>{wordChosen}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}
