import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./Navbar.css"

const Navbar = ({isLoggedIn}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logoutUser = () => {
  //   // Perform any necessary logout actions
  //   setIsLoggedIn(false);
  // };
  // const loginUser = (email, password) => {
  //   // Perform login logic, e.g., send API request, check credentials, etc.
  //   // Set isLoggedIn state based on successful login
  //   setIsLoggedIn(true);
  // };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <NavLinks isLoggedIn={isLoggedIn} />
      {/* <LoginForm loginUser={loginUser} /> */}
    </nav>
  );
};

export default Navbar;
