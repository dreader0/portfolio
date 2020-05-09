import React from 'react';
import logo from './DR_3.svg'
import './Logo.css';

const Logo = ({onRouteChange}) => {
  return (
      <div className="pic ma3 mt0 pt0">
        <img onClick={() => onRouteChange('home')} className='link pointer' alt='logo' src={logo} />
      </div>
  );
}

export default Logo;