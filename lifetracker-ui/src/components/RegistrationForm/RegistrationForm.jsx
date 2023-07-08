import React, { useState } from "react";
import "./RegistrationForm.css";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ handleRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [lastName, setlastName] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name, email, password, username, lastName);
    navigate("/activity")
  };

  return (
    <div className="login-container-here">
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          {/* <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setpasswordConfirm(e.target.value)}
            className="form-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div> */}
          <button type="submit" className="submit-registration">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
