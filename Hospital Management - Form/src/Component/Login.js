import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    // Clear error messages and login status when the component mounts
    setUsernameError('');
    setPasswordError('');
    setLoginSuccess(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error messages and login status
    setUsernameError('');
    setPasswordError('');
    setLoginSuccess(false);

    // Validate username
    if (username.trim() === '') {
      setUsernameError('Username is required*');
    }

    // Validate password
    if (password.trim() === '') {
      setPasswordError('Password is required*');
    } else if (password.trim().length < 8) {
      setPasswordError('Password must be at least 8 characters long*');
    }

    // If no validation errors, set login success
    if (usernameError === '' && passwordError === '') {
      setLoginSuccess(true);
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
            <label htmlFor="username">Username</label>
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
            <label htmlFor="password">Password</label>
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
            <button type="submit">Login</button>
            <br/>
            <Link to="/register">Register</Link>
          </form>
          <br/>
          {loginSuccess && (
            <div className="success-message">
              
              Login successful! 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
