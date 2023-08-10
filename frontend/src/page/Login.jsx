import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import './login.css';
import googlelogo from '../assets/google_logo.svg';
import { auth, provider } from '../services/firebase';
import { getUser } from '../api/user';

function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const [username, usernameToggle] = useState(false);

  const googleLogin = async () => {
    signInWithPopup(auth, provider);
    const res = await getUser(userName);
    if (res.error === 'Username exists') {
      navigate('/');
    } else {
      usernameToggle(!username);
    }
  };

  return (
    <div>
      <h1>Log in to Aimer!</h1>
      <div className="inner-box">
        <form>
          <div className="username">
            <label htmlFor="username-name" className="username-font">
              Username
              <input
                className={username ? 'username-box-not-used' : 'username-box'}
                type="username"
                label="Create Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Username"
              />
            </label>
            <p className={username ? 'username-not-used' : 'username-not-used'}>
              Username doesn&apos;t exist!
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
          Don&apos;t have an account?
          <a href="/signup" className="signup-button">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
