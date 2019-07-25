import React from 'react';

import spanner from './spanner.js';

export default function quotes(quote) {
  return (
    <React.Fragment>
      <p className="quote-item">{spanner(quote)}</p>
    </React.Fragment>
  );
}
