import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ handleRegistration }) => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     username: "",
  //     firstName: "",
  //     lastName: "",
  //     password: "",
  //     passwordConfirm: "",
  //   });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState("");
  const [lastName, setlastName] = useState("");


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name, email, password);
  };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation here
//     // Check if email is valid
//     if (formData.email && !formData.email.includes("@")) {
//       setErrors({ ...errors, email: "Invalid email" });
//       return;
//     }
//     // Check if passwords match
//     if (formData.password !== formData.passwordConfirm) {
//       setErrors({ ...errors, password: "Passwords don't match" });
//       return;
//     }
//     // Clear any previous errors
//     setErrors({});

//     // Call the signupUser function with the form data
//     signupUser(formData);
//   };

  return (
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
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div> */}
        <button type="submit" className="submit-registration">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
