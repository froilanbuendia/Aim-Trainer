import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../services/firebase';
import './signup.css';
import googlelogo from '../assets/google_logo.svg';
// import app from '../services/firebase';
// import Home from './Home';
import { auth, provider } from '../services/firebase';
import createUser from '../api/user';

function Signup() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const googleLogin = async () => {
    const res = await signInWithPopup(auth, provider).then((data) => {
      return createUser(data.user.displayName, userName, data.user.email);
    });
    console.log(res.ok);
    if (res.ok === true) {
      navigate('/');
    }
  };

  return (
    <div className="outer-box">
      <h1>Sign up to Aimer!</h1>
      <div className="inner-box">
        <form>
          <div className="username">
            <label htmlFor="username-name" className="username-font">
              Username
              <input
                className="username-box"
                type="username"
                label="Create Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Username"
              />
            </label>
          </div>
        </form>
        <div>
          <button type="button" onClick={googleLogin} className="google">
            <div className="google-font">
              <img src={googlelogo} alt="google logo" /> Sign Up With Google
            </div>
          </button>
        </div>
        <p className="login-message">
          Already have an account?
          <button type="button" className="login-button">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
