import React, { useState, useEffect } from "react";

const Countdown = ({ timestamp }) => {
  const calculateTimeLeft = (targetTimestamp) => {
    const now = Date.now();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(timestamp);
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-3 flex-wrap">
      <div className="bg-white text-sm sm:w-16 sm:h-16 w-12 h-12 flex items-center flex-col justify-center rounded-md space-y-1 sm:space-y-2 shadow-lg">
        <p className=" text-xl sm:text-3xl   text-gray-600">{days >= 0 ? days : "00"}</p>
        <p className=" text-[9px] sm:text-xs font-semibold">DAYS</p>
      </div>
      <div className="bg-white text-sm sm:w-16 sm:h-16 w-12 h-12 flex items-center flex-col justify-center rounded-md space-y-1 sm:space-y-2 shadow-lg">
        <p className=" text-xl sm:text-3xl   text-gray-600">{hours >= 0 ? hours : "00"}</p>
        <p className=" text-[9px] sm:text-xs font-semibold">HOURS</p>
      </div>
      <div className="bg-white text-sm sm:w-16 sm:h-16 w-12 h-12 flex items-center flex-col justify-center rounded-md space-y-1 sm:space-y-2 shadow-lg">
        <p className=" text-xl sm:text-3xl   text-gray-600">
          {minutes >= 0 ? minutes : "00"}
        </p>
        <p className=" text-[9px] sm:text-xs font-semibold">MINUTES</p>
      </div>
      <div className="bg-white text-sm sm:w-16 sm:h-16 w-12 h-12 flex items-center flex-col justify-center rounded-md space-y-1 sm:space-y-2 shadow-lg">
        <p className=" text-xl sm:text-3xl   text-gray-600">
          {seconds >= 0 ? seconds : "00"}
        </p>
        <p className=" text-[9px] sm:text-xs font-semibold">SECONDS</p>
      </div>
    </div>
  );
};

export default Countdown;
