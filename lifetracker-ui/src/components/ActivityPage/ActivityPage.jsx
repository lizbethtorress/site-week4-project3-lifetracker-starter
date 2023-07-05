import React from 'react';
import Loading from '../Loading/loading';
// import ActivityFeed from '../ActivityFeed/ActivityFeed';


const ActivityPage = ({ appState }) => {
  const { isProcessing, data } = appState;

  return (
    <div className="activity-page">
      {isProcessing ? (
        <Loading />
      ) : (
        // <ActivityFeed data={data} />
        <h2>Hello</h2>
      )}
    </div>
  );
};

export default ActivityPage;