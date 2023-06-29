import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

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

  return (
    <Router>
      <main>
        <div>
          <Navbar />
          {loggedIn ? (
            <>
              <div>
                <h1>Welcome! You are logged in!!</h1>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <Routes>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route
                exact
                path="/login"
                element={<LoginPage onLogin={handleLogin} error={loginError} />}
              />
              <Route
                exact
                path="/register"
                element={
                  <RegistrationPage handleRegistration={handleRegistration} />
                }
              />
              {/* <Route exact path="/activity" component={ActivityPage} />
            <Route exact path="/nutrition/:id" component={NutritionPage} />
            <Route exact path="/access-forbidden" component={AccessForbidden} /> */}
            </Routes>
            // <div>
            //   <Route
            //     exact
            //     path="/login"
            //     element={<LoginPage onLogin={handleLogin} error={loginError} />}
            //   />
            //   <RegistrationForm onRegister={handleRegistration} />
            // </div>
          )}
          {/* <Routes>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/login"
              element={<LoginPage onLogin={handleLogin} error={loginError} />}
            />
            <Route
              exact
              path="/register"
              element={
                <RegistrationPage handleRegistration={handleRegistration} />
              }
            />
            <Route exact path="/activity" component={ActivityPage} />
            <Route exact path="/nutrition/:id" component={NutritionPage} />
            <Route exact path="/access-forbidden" component={AccessForbidden} />
          </Routes> */}
        </div>
      </main>
    </Router>
  );
}

export default App;
