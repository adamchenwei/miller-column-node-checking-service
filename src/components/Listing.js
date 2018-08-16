import React, { Component } from 'react';
import logo from './logo.svg';

class Listing extends Component {
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
      <div className="Listing">
        {/* Async Call */}
        {/* State */}
        {/* Child Component */}
        {/* list.map */}
        <header className="Listing-header">
          <img src={logo} className="Listing-logo" alt="logo" />
          <h1 className="Listing-title">Welcome to React</h1>
        </header>

        <p className="Listing-intro">
          To get started22, edit <code>src/Listing.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Listing;
