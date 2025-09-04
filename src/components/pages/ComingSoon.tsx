import "../CSS/ComingSoon.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the shape of the time left object
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const ComingSoon: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-12-01") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return null;
    }

    return (
      <span key={interval}>
        {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown-timer">
      <h1>We are launching soon, please reload after minutes</h1>
      <p>Coming Soon To our E-Commerce and Scholarship.</p>
      <div className="timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <Link to="/">
        <button className="notify-button">Back to home page</button>
      </Link>
    </div>
  );
};

export default ComingSoon;
