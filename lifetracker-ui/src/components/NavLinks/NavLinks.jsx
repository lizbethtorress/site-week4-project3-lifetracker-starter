import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import "./NavLinks.css";

const NavLinks = ({ isLoggedIn, setLoggedIn}) => {
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false)
    window.location = "/";  //Refresh the page
  };

  return (
    <div className="nav-links">
      <div className="Activity">
        <Link to="/activity">Activity</Link>
      </div>
      <div className="Nutrition">
        <Link to="/nutrition">Nutrition</Link>
      </div>
      <div className="sleep">
        <Link to="/sleep">Sleep</Link>
      </div>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="register">
            <Link to="/register">Register</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavLinks;
