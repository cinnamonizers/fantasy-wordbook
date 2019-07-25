import React from 'react';
import { Link } from 'react-router-dom';

export default function nav(homeClicker, wordClicker, aboutClicker) {
  return (
    <React.Fragment>
      <nav>
        <Link to='/'>
          <button onClick={homeClicker}>Home</button>
        </Link>
        <Link to='/words-searched'>
          <button onClick={wordClicker}>Words Searched</button>
        </Link>
        <Link to='/about-us'>
          <button onClick={aboutClicker}>About Us</button>
        </Link>
      </nav>
    </React.Fragment>
  );
}
