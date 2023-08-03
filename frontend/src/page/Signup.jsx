import React, { useState } from 'react';
// import { signInWithPopup } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';
// import { auth } from '../services/firebase';

function Signup() {
  const [username, setUsername] = useState('');
  return (
    <div>
      <div>
        <button type="button" onClick={signInWithPopup}>
          Sign in With Google
        </button>
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
