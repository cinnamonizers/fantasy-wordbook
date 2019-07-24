import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>Fantasy Wordbook</h1>
      </React.Fragment>
    );
  }
}
