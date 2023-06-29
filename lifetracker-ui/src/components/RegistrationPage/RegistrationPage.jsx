import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const RegistrationPage = ( {handleRegistration} ) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in (using a custom hook, context, or state)
  const userIsLoggedIn = () => {
    // Check if the user is logged in based on your authentication logic
    const userToken = localStorage.getItem("lifetracker_token");
    return !!userToken; // Convert to boolean
  };/* Logic to check if user is logged in */;

  // If user is already logged in, redirect to /activity page
//   if (userIsLoggedIn || isLoggedIn) {
//     console.log("logged in!");
//     return <Link to="/activity" />;
//   }

  const signupUser = (formData) => {
    // Perform signup logic, e.g., send API request, register user, etc.
    // Set isLoggedIn state based on successful signup
    setIsLoggedIn(true);
  };
  console.log("here", signupUser)
  return (
    <div className="registration-page">
      <RegistrationForm signupUser={signupUser} handleRegistration={handleRegistration} />
    </div>
  );
};

export default RegistrationPage;