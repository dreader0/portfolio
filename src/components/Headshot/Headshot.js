import React from 'react';
import headshot from './Headshot.jpg'
import './Headshot.css'

const Headshot = () => {
  return (
      <div>
        <img className='ba br-100 bw2 headshot' alt='me' src={headshot} />
      </div>
  );
}

export default Headshot;