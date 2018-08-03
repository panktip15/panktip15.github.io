import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
            <text>About me</text>
            <text>Resume</text>
            <text>Experience</text>
            <text>Blog</text>
            <text>Contact</text>
          </div>
          <canvas id="myCanvas" />
          <img id="pankti" src="pankti.jpg" alt="profile" />

          <h1 className="App-title">Hi! It's me Pankti</h1>
          <h3> I'm a full-stack engineer</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
