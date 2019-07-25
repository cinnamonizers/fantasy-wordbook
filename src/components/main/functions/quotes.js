import React from 'react';

import spanner from './spanner.js';

export default function quotes(quote, sanskrit, translit) {
  return (
    <React.Fragment>
      <div className="quote-item">
        <p>{spanner(quote)}</p>
        <p className='hide'>{sanskrit}</p>
        <p className='hide'>{translit}</p>
      </div>
      
    </React.Fragment>
  );
}
