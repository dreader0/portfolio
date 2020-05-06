import React from 'react';
import headshot from './Headshot.JPG'
import './Headshot.css'

const Headshot = () => {
  return (
      <div className='mt5'>
        <img className='ba b--white br-100 bw2 headshot' alt='me' src={headshot} />
      </div>
  );
}

export default Headshot;