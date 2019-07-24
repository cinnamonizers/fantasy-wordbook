import React from 'react';

export default class MainBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  quoteDisplay = () => {
    return (
      <React.Fragment>
        <div className="quotesBox" data-id='1' onClick={this.props.definition}>
          {this.props.display(this.props.quote)}
        </div>
        <div className="quotesBox" data-id='2' onClick={this.props.definition}>
          {this.props.display(this.props.quote)}
        </div>
        <div className="quotesBox" data-id='3' onClick={this.props.definition}>
          {this.props.display(this.props.quote)}
        </div>
        <div className="quotesBox" data-id='4' onClick={this.props.definition}>
          {this.props.display(this.props.quote)}
        </div>
        <div className="quotesBox" data-id='5' onClick={this.props.definition}>
          {this.props.display(this.props.quote)}
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.quoteDisplay()}
      </React.Fragment>
    );
  }
}
