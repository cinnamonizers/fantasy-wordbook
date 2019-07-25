import React from 'react';

export default function AboutUsBuilder(name, gitHub, linkedIn) {
  return (
    <div className="about-us">
      <h2>{name}</h2>
      <div >
        <a
          href={gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='about-us-img' src={require('../../../assets/Octocat.png')} alt='GitHub Logo' />
        </a>
        <a
          href={linkedIn}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='about-us-img' src={require('../../../assets/LI-In-Bug.png')} alt='LinkedIn Logo' />
        </a>
      </div>
    </div>
  )
}