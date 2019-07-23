import React from "react";

import Spanner from "./spanner.js";

export default function Quotes(quote, clickEvent) {
  return (
    <React.Fragment>
      <div>
        <p>{Spanner(quote, clickEvent)}</p>
      </div>
    </React.Fragment>
  );
}
