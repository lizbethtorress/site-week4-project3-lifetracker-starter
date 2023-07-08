import React from "react";
import { Link } from "react-router-dom";
import "./ActivityNavbar.css"

const ActivityNavbar = () => {
  return (
    <div className="navbar-act">
      <div className="Activity">
        <Link to="/activity">Activity</Link>
      </div>
      <div className="Nutrition">
        <Link to="/nutrition">Nutrition</Link>
      </div>
      <div className="sleep">
        <Link to="/sleep">Sleep</Link>
      </div>
    </div>
  );
};

export default ActivityNavbar;
