import React from 'react';
import resume from '../Resume/Resume.pdf'

const Navigation = ({onRouteChange}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'center'}}>
      <p onClick={() => onRouteChange('about')} className='f4 link dim white ma3 pt0 pointer'>About</p>
      <p onClick={() => onRouteChange('projects')} className='f4 link dim white ma3 pt0 pointer'>Projects</p>
      <p onClick={() => onRouteChange('workterms')} className='f4 link dim white ma3 pt0 pointer'>Work Terms</p>
      <p >
        <a target='blank' className='f4 link dim white ma3 pt0 pointer' href={resume}>Resume</a>
      </p>
    </nav>
  );
}

export default Navigation;