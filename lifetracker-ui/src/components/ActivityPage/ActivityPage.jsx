import React from "react";
import Loading from "../Loading/loading";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const ActivityPage = ({ appState }) => {
  const { isProcessing, activityData } = appState;
  return (
    <div className="activity-page">
      {isProcessing ? (
        <Loading />
      ) : (
        <ActivityFeed activityData={activityData} />
      )}
    </div>
  );
};
export default ActivityPage;
