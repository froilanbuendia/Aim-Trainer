import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import './auth.css';
import googlelogo from '../assets/google_logo.svg';
import { auth, provider } from '../services/firebase';
import { createUser } from '../api/user';
import Form from '../components/Form';

function Signup() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  const googleLogin = async () => {
    const res = await signInWithPopup(auth, provider).then((data) => {
      return createUser(data.user.displayName, username, data.user.email);
    });
    if (res.data !== null) {
      navigate('/');
    } else {
      setHasError(!hasError);
    }
  };

  return (
    <div className={username ? '' : 'outer-box'}>
      <h1>Sign up to Aimer!</h1>
      <div className="inner-box">
        <Form hasError={hasError} setUsername={setUsername} username={username} isLogin={false} />
        <div>
          <button type="button" disabled={!username} onClick={googleLogin} className="google">
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
  );
}

export default Signup;
