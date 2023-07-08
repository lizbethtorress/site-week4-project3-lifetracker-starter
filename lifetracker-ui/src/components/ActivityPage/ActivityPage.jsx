import React from "react";
// import Loading from "../Loading/loading";
// import ActivityFeed from "../ActivityFeed/ActivityFeed";
import ActivityHero from "../ActivityHero/ActivityHero";
import ActivityNavbar from "../ActivityNavbar/ActivityNavbar";
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivityPage = ({ appState }) => {
  const { isProcessing, activityData } = appState;
  return (
    <div className="activity-page">
      <ActivityHero/>
      <ActivityNavbar/>
      <ActivityCard/>
    </div>
  );
};
export default ActivityPage;
