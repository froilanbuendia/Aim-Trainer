import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import './login.css';
import googlelogo from '../assets/google_logo.svg';
import { auth, provider } from '../services/firebase';
import { getUser } from '../api/user';
import Form from '../components/Form';

function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const [username, usernameToggle] = useState(false);

  const googleLogin = async () => {
    signInWithPopup(auth, provider);
    const res = await getUser(userName);
    if (res.data === userName) {
      navigate('/');
    } else {
      usernameToggle(!username);
    }
  };

  return (
    <div>
      <h1>Log in to Aimer!</h1>
      <div className="inner-box">
        <Form username={username} setUserName={setUserName} userNameSet={userName} isLogin={true} />

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
