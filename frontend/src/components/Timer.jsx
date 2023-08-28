import React, { useEffect, useState, useRef } from 'react';

function Timer() {
  const [timer, setTimer] = useState(60000);
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1);
  }, []);

  const formatTime = (time) => {
    const second = 1000;
    const minute = second * 60;

    let milliseconds = Number(
      Math.floor(time % 1000)
        .toString()
        .slice(0, -1),
    );
    let seconds = Math.floor((time % minute) / second);
    if (seconds <= 10) seconds = `0${seconds}`;
    if (milliseconds <= 10) milliseconds = `0${milliseconds}`;
    return `${seconds}:${milliseconds}`;
  };

  return <p className="time">Time: {formatTime(timer)}</p>;
}
export default Timer;
