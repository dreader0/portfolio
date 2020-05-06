import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

const About = () => {
  return (
    <div className='mt4 card pa2 pt0'>
      {/* <Headshot /> */}
      <p className='f2 white ma1 mt4 mb4'>About Me</p>
      <div className='words f4 white mb4'>
        <p>I'm Dan Reader. I am a co-op student currently working at ComPeters Inc. in Guelph, Ontario.</p>
        <p>Originally from Midland, Ontario, I have lived in Guelph since I started university in 2017.
        Right now I'm in the middle of my third co-op work term, and my second one in a row with ComPeters.
        Last summer I completed my first work term with Silence, a non-profit arts organization based in Guelph, revamping their website.
        </p>
        <p>Web is my main interest development wise, but I'm excited to learn all kinds of technologies and skills.
        I have experience with a range of tools and languages including JavaScript, SQL, React, AWS, Git, and more.
        </p>
      </div>
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'css3-alt']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'html5']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'js']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'react']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'aws']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'github']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'git-alt']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'android']} />
      <FontAwesomeIcon className='f2 pa3 pt1 pb4' color='#fff' icon={['fab', 'jira']} />
    </div>
  );
}

export default About;