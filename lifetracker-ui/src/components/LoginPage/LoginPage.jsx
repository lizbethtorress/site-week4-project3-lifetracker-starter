import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = ({ onLogin, error, setlogin }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (using a custom hook, context, or state)
    const userIsLoggedIn =
      localStorage.getItem("isLoggedIn") ===
      "true"; /* Logic to check if user is logged in */

    setlogin(userIsLoggedIn);
  }, []);

  // if (isLoggedIn) {
  //   return <Link to="/activity" />;
  // }

  return (
    <div className="login-page">
      <LoginForm onLogin={onLogin} error={error}/>
    </div>
  );
};

export default LoginPage;
