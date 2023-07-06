import React, { useState } from "react";
import "./SleepForm.css";

const SleepForm = ({
  handleSleep,
  sleepDate,
  setsleepDate,
  wakeDate,
  setwakeDate,
  sleepSubmitted,
}) => {


  const handleSleepDateChange = (e) => {
    setsleepDate(e.target.value);
  };

  const handleWakeDateChange = (e) => {
    setwakeDate(e.target.value);
  };

  return (
    <div className="sleep-form-container">
      <form onSubmit={handleSleep}>
        <div className="form-group">
          <label>Sleep Date:</label>
          <input
            type="datetime-local"
            value={sleepDate}
            onChange={handleSleepDateChange}
          />
        </div>
        <div className="form-group">
          <label>Wake Date:</label>
          <input
            type="datetime-local"
            value={wakeDate}
            onChange={handleWakeDateChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* {sleepSubmitted && ( */}
      {/* )} */}
      <div className="submitted-data">
          <p>Sleep Date: {sleepDate}</p>
          <p>Wake Date: {wakeDate}</p>
        </div>
    </div>
    
  );
};

export default SleepForm;
