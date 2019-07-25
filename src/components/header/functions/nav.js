import React from 'react';
import { Link } from 'react-router-dom';

export default function nav(homeClicker, wordClicker, aboutClicker) {
  return (
    <React.Fragment>
      <nav>        
        <button onClick={homeClicker}><Link className="navButton" to='/'>Home</Link></button>
        <button onClick={wordClicker}><Link className="navButton" to='/words-searched'>Words Searched</Link></button>
        <button onClick={aboutClicker}><Link className="navButton" to='/about-us'>About Us</Link></button>        
      </nav>
    </React.Fragment>
  );
}
