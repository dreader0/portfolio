import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

const About = () => {
  return (
    <div className='pt0'>
      {/* <Headshot /> */}
      <p className='f2 ma1'>About Me</p>
      <div className='abCard'>
        <div className='words f4 mb4'>
          <p>I'm Dan Reader, a co-op student at the University of Guelph majoring in Computer Science with a minor in Theatre Studies.</p>
          <p>Originally from Midland, Ontario, I have lived in Guelph since I started university in 2017.
            Right now I'm in the middle of my final co-op work term with ComPeters Inc. I have spent each of my work terms with ComPeters except for
            my first work term, which was with Silence, a non-profit arts organization based in Guelph.
          </p>
          <p>Web is my main interest development wise, but I'm excited to learn all kinds of technologies and skills.
            I have experience with a range of tools and languages including JavaScript, SQL, React, AWS, Git, and more.
          </p>
        </div>
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'css3-alt']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'html5']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'js']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'react']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'aws']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'github']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'git-alt']} />
        <FontAwesomeIcon className='f2 pa3 pt1' icon={['fab', 'jira']} />
      </div>
    </div>
  );
}

export default About;