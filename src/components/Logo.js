import React from 'react';
import logo from '../logo.svg';

export class Logo extends React.Component {
  render() {
    return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    )
  }
};

export default Logo;