import React, { Component } from 'react';
import logo from './assets/images/logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-header">
        {/* Logo */}
          <div className="Logo-header">
            <img src={logo} alt='og_nerd logo'></img>
          </div>
        {/* Coming Soon */}
          <div className="Coming-soon">
            <p>COMING SOON</p>
          </div>
        {/* Footer */}
          <div className="Footer">
          {/* Social Media Buttons */}
            <div className="Social-media-buttons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
            <p>&copy; OG Nerd 2019</p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
