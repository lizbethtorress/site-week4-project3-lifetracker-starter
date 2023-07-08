import React from "react";
import SleepForm from "../SleepForm/SleepForm";
import SleepHero from "../SleepHero/SleepHero";

const SleepPage = ({
  handleSleep,
  sleepDate,
  setsleepDate,
  wakeDate,
  setwakeDate,
  sleepData,
}) => {
  return (
    <div>
      <SleepHero/>
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
