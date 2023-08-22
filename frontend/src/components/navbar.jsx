import React from 'react';
import './navbar.css';
import sunLogo from '../assets/sun.svg';

function Navbar() {
  return (
    <div className="navbar">
      <p className="aimer-text">Aimer</p>
      <div className="sun-login">
        <img src={sunLogo} alt="sun logo" className="sun" />
        <a href="/signup" className="login-text">
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
