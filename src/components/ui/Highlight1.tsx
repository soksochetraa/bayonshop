"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const Highlight1 = () => {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Left big card (Chairs) */}
        <div className="relative overflow-hidden h-full">
          <div className="flex flex-col justify-between bg-gray-100 rounded-2xl p-6 h-full relative">
            {/* Text */}
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">
                1500+ Items
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Chairs</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul className="mt-3 text-gray-600 text-xs sm:text-sm space-y-1">
                {[
                  "Gaming Chair",
                  "Lounge Chair",
                  "Folding Chair",
                  "Dining Chair",
                  "Office Chair",
                  "Armchair",
                  "Bar Stool",
                  "Club Chair",
                ].map((item, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="absolute -right-5 bottom-0">
              <img
                src="/images/highlight/highlight-1/chair.png"
                alt="Chairs"
                className="h-48 sm:h-56 md:h-72 lg:h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
        {/* Right stacked cards */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Sofa */}
          <div className="relative flex flex-col justify-between bg-gray-100 rounded-2xl p-6 flex-1 overflow-hidden">
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">
                750+ Items
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Sofa</h3>
              <ul className="mt-3 text-gray-600 text-xs sm:text-sm space-y-1">
                {[
                  "Reception Sofa",
                  "Sectional Sofa",
                  "Armless Sofa",
                  "Curved Sofa",
                ].map((item, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute right-2 sm:right-5 -bottom-2">
              <img
                src="/images/highlight/highlight-1/sofa.png"
                alt="Sofa"
                className="h-32 sm:h-40 md:h-56 lg:h-72 w-auto object-contain"
              />
            </div>
          </div>
          {/* Lighting */}
          <div className="relative flex flex-col justify-between bg-gray-100 rounded-2xl p-6 flex-1 overflow-hidden">
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">
                450+ Items
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Lighting</h3>
              <ul className="mt-3 text-gray-600 text-xs sm:text-sm space-y-1">
                {[
                  "Table Lights",
                  "Floor Lights",
                  "Ceiling Lights",
                  "Wall Lights",
                ].map((item, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute right-4 sm:right-10 bottom-0">
              <img
                src="/images/highlight/highlight-1/light.png"
                alt="Lighting"
                className="h-28 sm:h-32 md:h-44 lg:h-56 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight1;
