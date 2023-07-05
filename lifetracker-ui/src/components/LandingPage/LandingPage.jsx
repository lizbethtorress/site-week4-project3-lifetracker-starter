// import React from "react";
// import "./LandingPage.css"

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <div className="hero">
//         <div className="hero-content">
//           <h1 className="title">LifeTracker</h1>
//           <h2 className="subtitle">Helping you take back control of your world.</h2>
//         </div>
//         <div className="hero-image">
//           <img
//             src="https://lifetracker-ui-ai8e.onrender.com/assets/tracker-2a96bfd0.jpg"
//             alt="Hero"
//             className="image"
//           />
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default LandingPage;
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="title">LifeTracker</h1>
          <h2 className="subtitle">Helping you take back control of your world.</h2>
        </div>
        <div className="hero-image">
          <img
            src="https://lifetracker-ui-ai8e.onrender.com/assets/tracker-2a96bfd0.jpg"
            alt="Hero"
            className="image"
          />
        </div>
      </div>

      <div className="tiles">
        <div className="tile">
          <div className="tile-content">
            <p className="tile-text">Fitness</p>
            <div className="tile-icon">
              <img
                src="https://lifetracker-ui-ai8e.onrender.com/assets/athlete-adf95577.jpg" // Insert your image link here
                alt="Fitness"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-text">Food</p>
            <div className="tile-icon">
              <img
                src="https://lifetracker-ui-ai8e.onrender.com/assets/food-e5a7cc9e.jpg" // Insert your image link here
                alt="Food"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-text">Rest</p>
            <div className="tile-icon">
              <img
                src="https://lifetracker-ui-ai8e.onrender.com/assets/alarm-cff3823f.jpg" // Insert your image link here
                alt="Rest"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-text">Planner</p>
            <div className="tile-icon">
              <img
                src="https://lifetracker-ui-ai8e.onrender.com/assets/calendar-debf6f3b.jpg" // Insert your image link here
                alt="Planner"
                className="icon-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
