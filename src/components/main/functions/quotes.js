import React from 'react';

import spanner from './spanner.js';

export default function quotes(quote, sanskrit, translit) {
  return (
    <React.Fragment>
      <div className="quote-item">
        <p className="hoverGrab">{spanner(quote)}</p>
        <p className='hide sansk'>{sanskrit}</p>
        <p className='hide translit'>{translit}</p>
      </div>
      
    </React.Fragment>
  );
}
