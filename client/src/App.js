import React, { Component } from 'react';
import logo from './assets/images/logo.png'
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* Logo */}
          <div className="Logo-header">
            <img src={logo} alt='og_nerd logo'></img>
          </div>
        {/* Coming Soon */}
          <div>
            <p>Coming Soon</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
