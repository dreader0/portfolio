import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toggle = ({onToggle, theme}) => {
  return (
    <div>
      <nav onClick={() => onToggle(theme)} className='f4 pa3 mr3 pointer' >
        <FontAwesomeIcon icon={['fas', 'lightbulb']}/>
      </nav>
    </div>
  );
}

export default Toggle;