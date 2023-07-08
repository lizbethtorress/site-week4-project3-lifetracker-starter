import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { useState } from "react";
import ActivityPage from "../ActivityPage/ActivityPage";
import LandingPage from "../LandingPage/LandingPage";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import SleepPage from "../SleepPage/SleepPage";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userName, setUserName] = useState();
  const [sleepDate, setsleepDate] = useState("");
  const [wakeDate, setwakeDate] = useState("");
  const [sleepSubmitted, setsleepSubmitted] = useState(false);
  const [user_id, setuser_id] = useState(0);
  const [sleepData, setsleepData] = useState([])


  useEffect(() => {
    const checkLoggedIn = () => {
      //check if the user is logged in when the user first accesses the webapp
      const token = localStorage.getItem("token");
      if (token) {
        //decode the stored token
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName);

        if (decodedToken.exp * 1000 > Date.now()) {
          setLoggedIn(true);
        } else {
          //Token has expired, log out the user
          handleLogout();
        }
      }
    };

    checkLoggedIn();
  }, []);

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

      if (response.status === 200) {
        // const { token } = response.data;
        const { token } = data;
        localStorage.setItem("token", token);

        //Successful Login
        setLoggedIn(true);
        setLoginError("");
        setuser_id(data.user.id)
        console.log(data.message); //optional - display a success message
        console.log(data.user.name); //another way to get the username

        const decodedToken = jwtDecode(token); //a way to get username from token
        setUserName(decodedToken.userName);
      } else {
        //Login failed
        setLoginError(data.message);
        console.log(data.message); //optional - display error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSleep = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/sleep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sleepDate, wakeDate, user_id }),
        
      });

      const data = await response.json();
  
    } catch (error) {
      console.error("Error:", error);
    }
    setsleepDate("");
    setwakeDate("");
    fetchsleepData()
  };

  const fetchsleepData = async () => {
    try {
      //advanced- optional [cache]
      //using cacheBust is advanced topic- its optional
      const response = await axios.get(
        `http://localhost:3001/api/sleep`
      );
      setsleepData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  useEffect(() => {
    fetchsleepData();
  }, []);

  //Registration function to handle registration
  const handleRegistration = async (
    name,
    email,
    password,
    username,
    lastName
  ) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, username, lastName }),
      });

      //wait for the response
      const data = await response.json();

      if (response.status === 201) {
        //get the token information and store in localStorage
        const { token } = data;
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token); //a way to get username from token
        setUserName(decodedToken.userName);

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
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserName("");
    window.location.href = "/";
  };

  const [appState, setAppState] = useState({
    isProcessing: false,
    activityData: [], // Sample data, replace with your actual data structure
  });

  return (
    <Router>
      <main>
        <div>
          <Navbar isLoggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          {loggedIn ? (
            <>
              <div>
                <Routes>
                  <Route
                    exact
                    path="/activity"
                    element={<ActivityPage appState={appState} />}
                  />
                  <Route
                    exact
                    path="/sleep"
                    element={
                      <SleepPage
                        handleSleep={handleSleep}
                        sleepDate={sleepDate}
                        setsleepDate={setsleepDate}
                        wakeDate={wakeDate}
                        setwakeDate={setwakeDate}
                        sleepData={sleepData}
                        // sleepSubmitted={sleepSubmitted}
                      />
                    }
                  />
                  <Route exact path="/" element={<LandingPage />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route
                exact
                path="/activity"
                element={
                  <p className="no-activity"> Login to view your activity</p>
                }
              />
              <Route
                exact
                path="/nutrition"
                element={
                  <p className="no-nutrition"> Login to view your nutrition</p>
                }
              />
              <Route
                exact
                path="/sleep"
                element={<p className="no-sleep"> Login to view your sleep</p>}
              />
              <Route exact path="/" element={<LandingPage />} />
              <Route
                exact
                path="/login"
                element={
                  <LoginPage
                    onLogin={handleLogin}
                    error={loginError}
                    setlogin={setLoggedIn}
                  />
                }
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