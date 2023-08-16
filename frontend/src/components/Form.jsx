import React from 'react';
import './form.css';
import PropTypes from 'prop-types';

function Form({ username, setUserName, userName, isLogin }) {
  const loginError = (
    <p className={username ? 'username-used' : 'username-not-used'}>Username doesn&apos;t exist!</p>
  );
  const SignupError = (
    <p className={username ? 'username-used' : 'username-not-used'}>Username already taken!</p>
  );
  return (
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
        {isLogin ? loginError : SignupError}
      </div>
    </form>
  );
}

Form.propTypes = {
  username: PropTypes.bool.isRequired,
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.func,
  isLogin: PropTypes.bool.isRequired,
};

export default Form;
