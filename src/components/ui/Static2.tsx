"use client";

import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import ProductCard1 from "./ProductCard1";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Static2 = () => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 5);

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  const format = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="w-full flex justify-center p-6">
      <div className="flex gap-6 w-[1320px]">
        {/* Flash Sale Box */}
        <div
          className={`${poppins.variable} font-sans flex-1 bg-gray-100 rounded-[20px] flex flex-col justify-center items-center relative p-6`}
        >
          <span className="flex gap-2 font-bold text-5xl mb-4">
            Flash <p className="text-green-800">Sale!</p>
          </span>
          <p className="text-gray-700 mb-10 text-2xl font-medium">
            Get 25% off – Limited Time Offer!
          </p>

          <div className="flex justify-center items-center gap-6 mb-10">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-gray-900">
                {format(days)}
              </span>
              <span className="text-lg text-gray-600">Days</span>
            </div>
            <span className="text-5xl font-extrabold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-gray-900">
                {format(hours)}
              </span>
              <span className="text-lg text-gray-600">Hours</span>
            </div>
            <span className="text-5xl font-extrabold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-gray-900">
                {format(minutes)}
              </span>
              <span className="text-lg text-gray-600">Minutes</span>
            </div>
            <span className="text-5xl font-extrabold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-gray-900">
                {format(seconds)}
              </span>
              <span className="text-lg text-gray-600">Seconds</span>
            </div>
          </div>

          <button className="px-10 py-4 bg-green-700 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-green-800 transition-all flex gap-2 cursor-pointer">
            Shop Now
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </button>
        </div>

        {/* Product Cards */}
        <div className="flex flex-1 gap-6">
          <ProductCard1
            title="Wireless Headphones"
            category="Electronics"
            price={99}
            oldPrice={149}
            discount="30%"
            rating={4.5}
            image="https://i.pinimg.com/736x/f0/09/d3/f009d321f4488ccf586afb6b3d9d4f7d.jpg"
            countdownEnd={new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)}
          />
          <ProductCard1
            title="Nike Air Sneakers"
            category="Shoes"
            price={120}
            oldPrice={180}
            discount="33%"
            rating={4.8}
            image="https://i.pinimg.com/736x/3c/44/c6/3c44c68edab86ed63b54f881b183be24.jpg"
            countdownEnd={new Date(Date.now() + 1000 * 60 * 60 * 48)}
          />
        </div>
      </div>
    </div>
  );
};

export default Static2;
