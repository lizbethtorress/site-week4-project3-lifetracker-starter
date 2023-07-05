import React, { useState } from 'react';
import "./LoginForm.css"
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validate email field
  //   if (email && !email.includes('@')) {
  //     setError('Please enter a valid email address');
  //     return;
  //   }

  //   // Reset error message
  //   setError('');

  //   // Call loginUser function
  //   loginUser(email, password);
  // };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    // navigate("/activity")
  };

  return (
    <div className="login-container">
    <div className="login-box">
      <div className="login-form">
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="submit-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;