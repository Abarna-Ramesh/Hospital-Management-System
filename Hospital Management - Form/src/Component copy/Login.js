import React, { useState } from 'react';
import './Login.css';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error messages
    setUsernameError('');
    setPasswordError('');

    // Validate username
    if (username.trim() === '') {
      setUsernameError('Username is required*');
    }

    // Validate password
    if (password.trim() === '') {
      setPasswordError('Password is required*');
    }
  };

  return (
    <div className="container">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="error-message" id="usernameErrMsg">
              {usernameError}
            </div>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error-message" id="passwordErrMsg">
              {passwordError}
            </div>
            <button type="submit">login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
