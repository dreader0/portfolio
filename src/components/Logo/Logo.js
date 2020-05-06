import React from 'react';
import logo from './DR_2.svg'
import './Logo.css';

const Logo = ({onRouteChange}) => {
  return (
    <div className='ma2 mt2'>
      <div className="pic pa3">
        <img onClick={() => onRouteChange('home')} className='link dim pointer' alt='logo' src={logo} />
      </div>
    </div>
  );
}

export default Logo;