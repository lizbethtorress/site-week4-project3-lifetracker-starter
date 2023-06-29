import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const NavLinks = ({ isLoggedIn, logoutUser }) => {
    const handleLogout = () => {
      localStorage.removeItem('lifetracker_token');
      window.location.reload(); // Refresh the page
    };
  
    return (
      <div className="nav-links">
        <Link to="/activity">Activity</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/resources">Other Resource</Link>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    );
  };
  
  export default NavLinks;