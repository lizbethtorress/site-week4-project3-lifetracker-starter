import React from "react";
import SleepForm from "../SleepForm/SleepForm";

const SleepPage = ({
  handleSleep,
  sleepDate,
  setsleepDate,
  wakeDate,
  setwakeDate,
  sleepSubmitted,
}) => {
  return (
    <div>
      <SleepForm
        handleSleep={handleSleep}
        sleepDate={sleepDate}
        setsleepDate={setsleepDate}
        wakeDate={wakeDate}
        setwakeDate={setwakeDate}
        sleepSubmitted={sleepSubmitted}
      />
    </div>
  );
};

export default SleepPage;
