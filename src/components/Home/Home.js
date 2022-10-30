import React from 'react';
import Headshot from '../Headshot/Headshot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

const Home = () => {
  return (
    <div style={{ display: 'inline-block' }} className='mt5 homeCard'>
      <Headshot />
      <p className='f2 ma1 mt3'>Daniel Reader</p>
      <p className='f4 mt1'>Full Stack Developer</p>
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/dreader0'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab', 'github']} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/dan-reader-a8175817a/'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab', 'linkedin-in']} />
      </a>
      {/* <FontAwesomeIcon className='f2 pl3 pr3' icon={['fas', 'grip-lines-vertical']} /> */}
      <a target="_blank" rel="noopener noreferrer" href='https://dreader0.github.io/deathroll'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fas', 'skull']} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://dreader0.github.io/Phaser-Pong/'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fas', 'table-tennis']} />
      </a>
      {/* <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/danreader/?hl=en'>
        <FontAwesomeIcon className='social f2 pl3 pr3' icon={['fab', 'instagram']} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/DanRead99'>
        <FontAwesomeIcon className='social accent f2 pl3 pr3' icon={['fab', 'twitter']} />
      </a> */}
    </div>
  );
}

export default Home;