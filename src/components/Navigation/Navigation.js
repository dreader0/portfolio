import React from 'react';

const Navigation = ({onRouteChange}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'center'}}>
      <p onClick={() => onRouteChange('about')} className='f3 link dim white pa3 pointer'>About</p>
      <p onClick={() => onRouteChange('projects')} className='f3 link dim white pa3 pointer'>Projects</p>
      <p onClick={() => onRouteChange('workterms')} className='f3 link dim white pa3 pointer'>Work Terms</p>
      <p onClick={() => onRouteChange('resume')} className='f3 link dim white pa3 pointer'>Resume</p>
    </nav>
  );
}

export default Navigation;