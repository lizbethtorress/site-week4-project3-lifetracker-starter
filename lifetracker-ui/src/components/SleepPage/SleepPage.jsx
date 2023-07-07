import React from "react";
import SleepForm from "../SleepForm/SleepForm";

const SleepPage = ({
  handleSleep,
  sleepDate,
  setsleepDate,
  wakeDate,
  setwakeDate,
  sleepData,
  // sleepSubmitted,
}) => {
  return (
    <div>
      <SleepForm
        handleSleep={handleSleep}
        sleepDate={sleepDate}
        setsleepDate={setsleepDate}
        wakeDate={wakeDate}
        setwakeDate={setwakeDate}
        sleepData={sleepData}
      />
    </div>
  );
};

export default SleepPage;
