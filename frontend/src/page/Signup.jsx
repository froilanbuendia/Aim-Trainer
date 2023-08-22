import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import './signup.css';
import googlelogo from '../assets/google_logo.svg';
import { auth, provider } from '../services/firebase';
import createUser from '../api/user';
import Navbar from '../components/navbar';

function Signup() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const [username, usernameToggle] = useState(false);

  const googleLogin = async () => {
    const res = await signInWithPopup(auth, provider).then((data) => {
      return createUser(data.user.displayName, userName, data.user.email);
    });
    if (res.data !== null) {
      navigate('/');
    } else {
      usernameToggle(!username);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className={username ? '' : 'outer-box'}>
        <h1>Sign up to Aimer!</h1>
        <div className="inner-box">
          <form>
            <div className="username">
              <label htmlFor="username-name" className="username-font">
                Username
                <input
                  className={username ? 'username-box-used' : 'username-box'}
                  type="username"
                  label="Create Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  placeholder="Username"
                />
              </label>
              <p className={username ? 'username-used' : 'username-not-used'}>
                Username already taken!
              </p>
            </div>
          </form>
          <div>
            <button type="button" disabled={!userName} onClick={googleLogin} className="google">
              <div className="google-font">
                <img src={googlelogo} alt="google logo" /> Sign Up With Google
              </div>
            </button>
          </div>
          <p className="login-message">
            Already have an account?
            <a href="/login" className="login-button">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
