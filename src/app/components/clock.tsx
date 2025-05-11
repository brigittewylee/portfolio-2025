"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [hours, setHours] = useState("--");
  const [minutes, setMinutes] = useState("--");
  const [ampm, setAmPm] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const [time, period] = timeString.split(" ");
      const [hr, min] = time.split(":");

      setHours(hr);
      setMinutes(min);
      setAmPm(period.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .colon {
          animation: fadeBlink 1s infinite ease-in-out;
        }

        @keyframes fadeBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
      <div className="font-arimo flex items-baseline gap-0">
        <span>
          {hours}
          <span className="colon">:</span>
          {minutes}
        </span>
        <span className="text-base">{ampm}</span>
      </div>
    </>
  );
};

export default Clock;
