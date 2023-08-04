import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import './signup.css';
import googlelogo from '../assets/google_logo.svg';

function Signup() {
  const [username, setUsername] = useState('');
  // const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
