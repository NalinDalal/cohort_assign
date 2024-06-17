import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/nalin-dalal-815617271/', '_blank');
};

function LinkedInButton() {
  return (
    <div>
      <h1>My LinkedIn Button</h1>
      <button onClick={openLinkedIn}>Open LinkedIn Profile</button>
    </div>
  );
}

const openTwitter=()=>{
window.open('https://twitter.com/nalin82929','_blank');
};

function App() {

  return (
      <div>
        <h1>Nalin Dalal</h1>


        <p>A TA in 100xDevs Cohort 2.0</p>
        <br></br>
        <h3>Interests</h3>
        <p>Ionic</p><p>Open Source</p><p>App Dev</p>
        {/*<button className="blue-button">
        <a href="www.linkedin.com/in/nalin-dalal-815617271">LinkedIn</a>
      </button>*/}
        <button className="blue-button" onClick={openLinkedIn}>LinkedIn</button>
        <button className="blue-button" onClick={openTwitter}>Twitter</button>
      </div>
  )
}

export default App
