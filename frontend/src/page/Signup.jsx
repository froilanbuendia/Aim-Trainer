import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';

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
    <div>
      <div>
        <button type="button" onClick={googleLogin} name="google ">
          Sign in With Google
        </button>
        {/* {user ? 'Welcome ,' + user.displayName : ''} */}
        <form>
          <div>
            <label htmlFor="username">
              Username
              <input
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
      </div>
    </div>
  );
}

export default Signup;
