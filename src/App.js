import React, { Component } from 'react';
import logo from './logo.svg';
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
          <h1 className="App-title">Hi! it's me Pankti</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
