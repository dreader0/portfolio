import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import WorkTerms from './components/WorkTerms/WorkTerms';
import Home from './components/Home/Home';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import './App.css';

library.add(fab, fas)

const particlesOptions = {
  "particles": {
    "color": {
     "value": "#fff"
    },
    "number": {
        "value": 60,
        "density": {
            "enable": true,
            "value_area": 1000
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.08
    },
    "move": {
        "direction": "right",
        "speed": 0.01
    },
    "size": {
        "value": 1
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
  route: 'workterms',
  theme: 'dark'
}

class App extends Component{
  constructor() {
    super()
    this.state = initialState;
  }

  onRouteChange = (route) => {
    this.setState({
      route: route,
    })
  }

  toggleTheme = (theme) => {
    if (theme === 'light') {
      this.setState({
        theme: 'dark'
      })
    } else {
      this.setState({
        theme: 'light'
      })
      particlesOptions.particles.color = '#000000';
    }
  }

  render() {
    const { route, theme } = this.state;
    return (
      <div className="App" >
        <Particles 
          className = 'particles'
          params={particlesOptions} />
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
        <div className='center navbarspace mb4'>
          <Logo onRouteChange={this.onRouteChange} />
          <Navigation onRouteChange={this.onRouteChange} onToggle={this.toggleTheme} theme={theme} />
          </div>
          <div style={{ display: 'inline-block' }}>
          {
          route === 'about' ?
            <div><About /></div>
            : ( route === 'projects' ?
              <div><Projects /></div>
              : (route === 'workterms' ?
                <div><WorkTerms /></div>
                :
                <div><Home /></div>
              )
            )
          }
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
