import React from 'react';

const Projects = () => {
  return (
    <div>
      <p className='f2 pa3'>Projects</p>
      <div className='card'>
        <p>Smart Brian</p>
        <img alt='smart brian screenshot' src='' />
        <p>As part of a Udemy course I completed (Zero To Mastery), I created this react app that highlights faces in photos submitted by the user.
        The frontend is made in React, with a Node server in the backend, and a PostgreSQL database to store login and user information.
          It is a live site that can be found <a target='blank' href='https://dreader0.github.io/smartbrian/'>here</a>. The source code is available on my <a target='blank' href='https://github.com/dreader0/smartbrian'>GitHub</a>.
          Also available on my GitHub is the source code for the <a target='blank' href='https://github.com/dreader0/smart-brain-api'>node server backend</a>.
        </p>
      </div>
    </div>
  );
}

export default Projects;