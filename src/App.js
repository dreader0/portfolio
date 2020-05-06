import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import WorkTerms from './components/WorkTerms/WorkTerms';
import Home from './components/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';

library.add(fab)

const particlesOptions = {
  "particles": {
    // "color": {
    //  "value": "#000"
    // },
    "number": {
        "value": 60,
        "density": {
            "enable": true,
            "value_area": 1500
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.08
    },
    "move": {
        "direction": "right",
        "speed": 0.15
    },
    "size": {
        "value": 3
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
            <div className='center'><About /></div>
            : ( route === 'projects' ?
              <div><Projects /></div>
              : (route === 'workterms' ?
                <div><WorkTerms /></div>
                : (route === 'resume' ?
                <div>Resume</div>
                :
                <div><Home /></div>
                )
              )
            )
        }
      </div>
    );
  }
}

export default App;
