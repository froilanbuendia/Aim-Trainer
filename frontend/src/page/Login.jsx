import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import './auth.css';
import googlelogo from '../assets/google_logo.svg';
import { auth, provider } from '../services/firebase';
import { getUser } from '../api/user';
import Form from '../components/Form';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const user = auth.AuthImpl;
  console.log(user);
  const googleLogin = async () => {
    signInWithPopup(auth, provider);
    const res = await getUser(username);
    if (res.data.username === username) {
      navigate('/');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div>
      <h1>Log in to Aimer!</h1>
      <div className="inner-box">
        <Form hasError={hasError} setUsername={setUsername} userNameSet={username} isLogin />
        <div>
          <button type="button" disabled={!username} onClick={googleLogin} className="google">
            <div className="google-font">
              <img src={googlelogo} alt="google logo" /> Sign In With Google
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
