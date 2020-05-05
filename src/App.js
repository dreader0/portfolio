import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
        "value": 60,
        "density": {
            "enable": true,
            "value_area": 1500
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.02
    },
    "move": {
        "direction": "right",
        "speed": 0.05
    },
    "size": {
        "value": 2
    },
    "opacity": {
        "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.05
        }
    }
},
"interactivity": {
    "events": {
        "onclick": {
            "enable": true,
            "mode": "push"
        }
    },
    "modes": {
        "push": {
            "particles_nb": 1
        }
    }
},
"retina_detect": true
}

class App extends Component{
  
  render(){
      return (
        <div className = "App" >
          <Particles 
            className = 'particles'
            params={particlesOptions} />
          <div>
          <Logo />
          </div>
        </div>
      );
  };

}

export default App;
