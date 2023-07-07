import React, { useState } from "react";
import "./SleepForm.css";

const SleepForm = ({
  handleSleep,
  sleepDate,
  setsleepDate,
  wakeDate,
  setwakeDate,
  sleepData,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSleepDateChange = (e) => {
    setsleepDate(e.target.value);
  };

  const handleWakeDateChange = (e) => {
    setwakeDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSleep();
    setSubmitted(true);
    setShowForm(false);
  };

  const handleLogMoreSleep = () => {
    setShowForm(true);
    setSubmitted(false);
  };

  console.log("LOVENFEJOWF", sleepData)
  // return (
  //   <div className="sleep-form-container">
  //     {showForm ? (
  //       <form onSubmit={handleSubmit}>
  //         <div className="form-group">
  //           <label className="form-label">Sleep Date:</label>
  //           <input
  //             type="datetime-local"
  //             className="form-input"
  //             value={sleepDate}
  //             onChange={handleSleepDateChange}
  //           />
  //         </div>
  //         <div className="form-group">
  //           <label className="form-label">Wake Date:</label>
  //           <input
  //             type="datetime-local"
  //             className="form-input"
  //             value={wakeDate}
  //             onChange={handleWakeDateChange}
  //           />
  //         </div>
  //         <button type="submit" className="form-button">
  //           Submit
  //         </button>
  //       </form>
  //     ) : (
  //       <div className="submitted-data">
          
  //         <p>Sleep Date: {sleepDate}</p>
  //         <p>Wake Date: {wakeDate}</p>
  //         <button className="log-more-button" onClick={handleLogMoreSleep}>
  //           Log More Sleep
  //         </button>
  //       </div>
  //     )}
  //     <ul className="sleep-list">
  //       {sleepData.map((userSleep) => (
  //         <li key={id} className="sleep-item">
  //           {userSleep.sleepDate}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <div className="sleep-form-container">
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Sleep Date:</label>
            <input
              type="datetime-local"
              className="form-input"
              value={sleepDate}
              onChange={handleSleepDateChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Wake Date:</label>
            <input
              type="datetime-local"
              className="form-input"
              value={wakeDate}
              onChange={handleWakeDateChange}
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="submitted-data">
          <button className="log-more-button" onClick={handleLogMoreSleep}>
            Log More Sleep
          </button>
        </div>
      )}
  
      <ul className="sleep-list">
        {sleepData.map((userSleep) => (
          <li key={userSleep.id} className="sleep-item">
            <p>Sleep Date: {userSleep.sleepdate}</p>
            <p>Wake Date: {userSleep.wakedate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepForm;