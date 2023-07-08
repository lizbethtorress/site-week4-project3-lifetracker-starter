import React from 'react'
import "./ActivityCard.css"

const ActivityCard = () => {
  return (
    <div>
      <div className="sleep-info">
        <div className="sleep-label">Average Sleep</div>
        <div className="average-sleep">{9} hours</div>
      </div>
    </div>
  )
}

export default ActivityCard