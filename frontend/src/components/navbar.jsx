import React from 'react';
import './navbar.css';
import { signOut } from 'firebase/auth';
import sunLogo from '../assets/sun.svg';
import { auth } from '../services/firebase';

function Navbar() {
  const logoutUser = () => {
    signOut(auth);
  };

  return (
    <div className="navbar">
      <p className="aimer-text">Aimer</p>
      <div className="sun-login">
        <img src={sunLogo} alt="sun logo" className="sun" />
        <a onClick={logoutUser} href="/login" className="login-text">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Navbar;
