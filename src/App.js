import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
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

const initialState = {
  route: 'home'
}

class App extends Component{
  constructor() {
    super()
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  render() {
    const { route } = this.state;
    return (
      <div className = "App" >
        <Particles 
          className = 'particles'
          params={particlesOptions} />
        <div className='center navbarspace'>
          <Logo onRouteChange={this.onRouteChange} />
          <Navigation onRouteChange={this.onRouteChange} />
        </div>
        {
          route === 'about' ?
            <div><p className='f3 link dim white pa3 pointer'>About Me</p></div>
            : ( route === 'projects' ?
              <div><p className='f3 link dim white pa3 pointer'>Projects</p></div>
              : (route === 'workterms' ?
                <div><p className='f3 link dim white pa3 pointer'>Work Terms</p></div>
                : (route === 'resume' ?
                <div><p className='f3 link dim white pa3 pointer'>Resume</p></div>
                :
                <div><p className='f3 link dim white pa3 pointer'>Home</p></div>
                )
              )
            )
        }
      </div>
    );
  }
}

export default App;
