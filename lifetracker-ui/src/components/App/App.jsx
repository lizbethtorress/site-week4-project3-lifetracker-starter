import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { useState } from "react";
import ActivityPage from "../ActivityPage/ActivityPage";
import LandingPage from "../LandingPage/LandingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        //Successful Login
        setLoggedIn(true);
        setLoginError("");
        console.log(data.message); //optional - display a success message
      } else {
        //Login failed
        setLoginError(data.message);
        console.log(data.message); //optional - display error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Registration function to handle registration
  const handleRegistration = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      //wait for the response
      const data = await response.json();

      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
      } else {
        //REgistration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  const [appState, setAppState] = useState({
    isProcessing: false,
    data: [] // Sample data, replace with your actual data structure
  });

  return (
    
    <Router>
      <main>
        <div>
          <Navbar isLoggedIn={loggedIn} />
        
          {loggedIn ? (
            <>
              <div>
                <Routes>
                  <Route
                    exact
                    path="/activity"
                    element={<ActivityPage appState={appState} />}
                  />
                  <Route exact path="/" element={<LandingPage/>} />
                </Routes>
              </div>
            </>
          ) : (
            
            <Routes>
              
              <Route exact path="/" element={<LandingPage/>} />
              <Route
                exact
                path="/login"
                element={<LoginPage onLogin={handleLogin} error={loginError} setlogin = {setLoggedIn}/>}
              />
              <Route
                exact
                path="/register"
                element={
                  <RegistrationPage handleRegistration={handleRegistration} />
                }
              />
            </Routes>
          )}
        </div>
      </main>
    </Router>
  );
}

export default App;
