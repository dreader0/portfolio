import React from 'react';
// import resume from '../Resume/Resume.pdf'
import Toggle from '../Toggle/Toggle';
import './Navigation.css'

const Navigation = ({ onRouteChange, onToggle, theme }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className='mb3'>
      {/* <nav onClick={() => onRouteChange('about')} className='f5 ma3 pt1 pointer'>About</nav>
      <nav onClick={() => onRouteChange('projects')} className='f5 ma3 pt1 pointer'>Projects</nav> */}
      {/* <nav onClick={() => onRouteChange('workterms')} className=' f5 ma3 pt1 pointer'>Work Terms</nav> */}
      {/* <p >
        <a target='blank' className='f5 link ma3 pt0 pointer' href={resume}>Resume</a>
      </p> */}
      <Toggle onToggle={onToggle} theme={theme} />
    </div>
  );
}

export default Navigation;