import React from 'react';
import './Projects.css'
import smartbrian from './smartbrian.png'
import pong from './pong.png'

const Projects = () => {
  return (
    <div className='pt0'>
      <p className='f2 ma1'>Projects</p>
      <div className='ma0'>
        <div className='card'>
          <p className='f4'>Smart Brian</p>
          <img className='br2 scrnsht' alt='smart brian screenshot' src={smartbrian} />
          <p className='f6 desc'>As part of a Udemy course I completed (Zero To Mastery), I created this react app that highlights faces in photos submitted by the user.
          <br /><br />The frontend is made in React, with a Node server in the backend, and a PostgreSQL database to store login and user information.
          <br /><br />It is a live site that can be found <a className='link i' target='blank' href='https://dreader0.github.io/smartbrian/'>here</a>. The source code is available on my <a className='link i' target='blank' href='https://github.com/dreader0/smartbrian'>GitHub</a>.
            Also available on my GitHub is the source code for the <a className='link i' target='blank' href='https://github.com/dreader0/smart-brain-api'>node server backend</a>.
          </p>
        </div>
        <div className='card'>
          <p className='f4'>Phaser Pong</p>
          <img className='br2 scrnsht' alt='phaser pong screenshot' src={pong} />
          <p className='f6 desc'>In an effort to learn basic game development for browser based games, I ended up with this JavaScript/Phaser 3 clone of Pong. It's actually the second clone of Pong I've created, the first being a high school Java project made in NetBeans.
            <br /><br />Before getting to this specific game, I also made two Breakout clones: one made with pure JavaScript, and one using the Phaser CE framework.
            <br /><br />All of these projects are on my <a className='link i' target='blank' href='https://github.com/dreader0/smartbrian'>GitHub</a>, along with all of my other projects.
          </p>
        </div>
        <div>
          <p className='f4 ma1 mt3'>+<br /> This Website!</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;