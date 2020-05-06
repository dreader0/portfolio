import React from 'react';
import Headshot from '../Headshot/Headshot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div>
      <Headshot />
      <p className='f2 white ma1'>Daniel Reader</p>
      <p className='f3 white mt0'>Co-op Student / Developer</p>
      <a target='blank' href='https://github.com/dreader0'>
        <FontAwesomeIcon className='f2 pl3 pr3' color='#fff' icon={faGithub} />
      </a>
      <a target='blank' href='https://www.linkedin.com/in/dan-reader-a8175817a/'>
        <FontAwesomeIcon className='f2 pl3 pr3' color='#fff' icon={faLinkedinIn} />
      </a>
      <a target='blank' href='https://www.instagram.com/danreader/?hl=en'>
        <FontAwesomeIcon className='f2 pl3 pr3' color='#fff' icon={faInstagram} />
      </a>
      <a target='blank' href='https://twitter.com/DanRead99'>
        <FontAwesomeIcon className='f2 pl3 pr3' color='#fff' icon={faTwitter} />
      </a>
    </div>
  );
}

export default Home;