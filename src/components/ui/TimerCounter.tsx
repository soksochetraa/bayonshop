"use client";

import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

type TimerCounterProps = {
  targetTime: Date;
};

const TimerCounter: React.FC<TimerCounterProps> = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetTime.getTime() - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: d > 0 ? d : 0,
      hours: h > 0 ? h : 0,
      minutes: m > 0 ? m : 0,
      seconds: s > 0 ? s : 0,
    };
  };

  // 🚨 Render empty first (so SSR markup is stable)
  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof calculateTimeLeft
  > | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());
    update(); // first run immediately
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const format = (n: number) => n.toString().padStart(2, "0");

  // While hydrating, render placeholders (avoids mismatch)
  if (!timeLeft) {
    return (
      <div
        className={`${poppins.variable} font-sans w-fit flex justify-center items-center rounded-2xl gap-2 bg-amber-400 py-3 px-4 bottom-1 absolute left-1/2 transform -translate-x-1/2`}
      >
        Loading...
      </div>
    );
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div
      className={`${poppins.variable} font-sans w-fit flex justify-center items-center rounded-2xl gap-2 bg-amber-400 py-3 px-4 bottom-1 absolute left-1/2 transform -translate-x-1/2`}
    >
      <div className="days-countdown flex flex-col justify-center items-center">
        <span className="text-md font-semibold text-gray-800">
          {format(days)}
        </span>
        <span className="text-xs text-gray-500">Days</span>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="hour-countdown flex flex-col justify-center items-center">
        <span className="text-md font-semibold text-gray-800">
          {format(hours)}
        </span>
        <span className="text-xs text-gray-500">Hours</span>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="minutes-countdown flex flex-col justify-center items-center">
        <span className="text-md font-semibold text-gray-800">
          {format(minutes)}
        </span>
        <span className="text-xs text-gray-500">Minutes</span>
      </div>
      <span className="text-xl font-bold">:</span>
      <div className="seconds-countdown flex flex-col justify-center items-center">
        <span className="text-md font-semibold text-gray-800">
          {format(seconds)}
        </span>
        <span className="text-xs text-gray-500">Seconds</span>
      </div>
    </div>
  );
};

export default TimerCounter;
