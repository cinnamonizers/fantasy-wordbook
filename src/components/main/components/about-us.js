import React from 'react';
import aboutUsBuilder from '../functions/about-us-builder';

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Padmapriya Ganapathi', 'Manish KC', 'Renee Messick', 'Nicholas Paro'],
      padma: ['https://github.com/gpadmapriya', 'https://www.linkedin.com/in/padma-ganapathi-71470ab/'],
      manish: ['https://github.com/jManij', 'https://www.linkedin.com/in/manish-kc-15a06b127/'],
      renee: ['https://github.com/rnmessick', 'https://www.linkedin.com/in/renee-messick-16068259/'],
      nick: ['https://github.com/paronicholas', 'https://www.linkedin.com/in/nparo/']
    }
  }

  render() {
    return (
      <React.Fragment>
        <div >
          <img className='team-photo' src={require('../../../assets/cinnamonizers-team.jpg')} alt='Cinnamonizer Team' />
        </div>
        {aboutUsBuilder(
          this.state.names[1],
          this.state.manish[0],
          this.state.manish[1]
        )}
        {aboutUsBuilder(
          this.state.names[0],
          this.state.padma[0],
          this.state.padma[1]
        )}
        {aboutUsBuilder(
          this.state.names[2],
          this.state.renee[0],
          this.state.renee[1]
        )}
        {aboutUsBuilder(
          this.state.names[3],
          this.state.nick[0],
          this.state.nick[1]
        )}
      </React.Fragment>
    )
  }
}