import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adam Chen Wei',
    };
  }

  asyncCallResult() {
    // axios('').then((data) => {
    //   console.log(data);
    // })
  }

  render() {
    return (
      <div className="App">
        {/* Async Call */}
        {/* State */}
        {/* Child Component */}
        {/* list.map */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started22, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
