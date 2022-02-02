import React, { useEffect, useState } from "react";
import "./App.css";

const date = new Date();
export default function App() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="hour">{dateTime.hours}:</div>
      <div className="minute">{dateTime.minutes}:</div>

      <div className="seconds">{dateTime.seconds}</div>
    </div>
  );
}
