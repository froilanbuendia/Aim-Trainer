import React from 'react';
import './form.css';
import PropTypes from 'prop-types';

function Form({ hasError, setUsername, username, isLogin }) {
  const ErrorMessage = (
    <p className={hasError ? 'username-used' : 'username-not-used'}>
      {isLogin ? "Username doesn't exist!" : 'Username already taken!'}
    </p>
  );

  return (
    <form>
      <div className="username">
        <label htmlFor="username-name" className="username-font">
          Username
          <input
            className={hasError ? 'username-box-used' : 'username-box'}
            type="username"
            label="Create Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </label>
        {ErrorMessage}
      </div>
    </form>
  );
}

Form.propTypes = {
  hasError: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.func,
  isLogin: PropTypes.bool.isRequired,
};

export default Form;
