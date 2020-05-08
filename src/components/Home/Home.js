import React from 'react';
import Headshot from '../Headshot/Headshot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

const Home = () => {
  return (
    <div style={{display: 'inline-block'}}className='mt5'>
      <Headshot />
      <p className='f2 ma1 mt5'>Daniel Reader</p>
      <p className='f4 mt1'>Co-op Student / Developer</p>
      <a target='blank' href='https://github.com/dreader0'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab','github']} />
      </a>
      <a target='blank' href='https://www.linkedin.com/in/dan-reader-a8175817a/'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab','linkedin-in']} />
      </a>
      <a target='blank' href='https://www.instagram.com/danreader/?hl=en'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab','instagram']} />
      </a>
      <a target='blank' href='https://twitter.com/DanRead99'>
        <FontAwesomeIcon className='social accent f2 pl3 pr3' icon={['fab','twitter']} />
      </a>
    </div>
  );
}

export default Home;