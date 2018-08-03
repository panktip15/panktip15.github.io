import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <span className="name">Pankti Doshi</span>
          <div className="navBar">
            <span>About me</span>
            <span>Project</span>
            <span>Resume</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </header>
        <br/>
        <canvas id="myCanvas" />
      </div>
    );
  }
}

export default App;
