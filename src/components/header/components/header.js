import React from 'react';

import nav from '../functions/nav.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>Fantasy Wordbook</h1>
        {nav(this.props.homeV, this.props.wordV, this.props.aboutV)}
      </React.Fragment>
    );
  }
}
