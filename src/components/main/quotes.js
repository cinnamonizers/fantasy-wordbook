import React from "react";

import Spanner from "./spanner.js";

export default function Quotes(quote, clickEvent) {
  return (
    <React.Fragment>

      <p className="quotesBox">{Spanner(quote)}</p>

    </React.Fragment>
  );
}
