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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[1120px] mx-auto py-10">
        {/* Left big card (Chairs) */}
        <div className="relative overflow-hidden h-full">
          <div className="flex flex-col justify-between bg-gray-100 rounded-2xl p-6 h-full relative">
            {/* Text */}
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-sm">
                1500+ Items
              </span>
              <h3 className="text-2xl font-bold mt-1">Chairs</h3>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul className="mt-3 text-gray-600 text-sm space-y-1">
                <li className="hover:text-black cursor-pointer">
                  Gaming Chair
                </li>
                <li className="hover:text-black cursor-pointer">
                  Lounge Chair
                </li>
                <li className="hover:text-black cursor-pointer">
                  Folding Chair
                </li>
                <li className="hover:text-black cursor-pointer">
                  Dining Chair
                </li>
                <li className="hover:text-black cursor-pointer">
                  Office Chair
                </li>
                <li className="hover:text-black cursor-pointer">Armchair</li>
                <li className="hover:text-black cursor-pointer">Bar Stool</li>
                <li className="hover:text-black cursor-pointer">Club Chair</li>
              </ul>
            </div>
            {/* Image */}
            <div className="absolute -right-5 bottom-0">
              <img
                src="/images/highlight/highlight-1/chair.png"
                alt="Chairs"
                className="h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Sofa */}
          <div className="relative flex flex-col justify-between bg-gray-100 rounded-2xl p-6 flex-1 overflow-hidden">
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-sm">
                750+ Items
              </span>
              <h3 className="text-2xl font-bold mt-1">Sofa</h3>
              <ul className="mt-3 text-gray-600 text-sm space-y-1">
                <li className="hover:text-black cursor-pointer">
                  Reception Sofa
                </li>
                <li className="hover:text-black cursor-pointer">
                  Sectional Sofa
                </li>
                <li className="hover:text-black cursor-pointer">
                  Armless Sofa
                </li>
                <li className="hover:text-black cursor-pointer">Curved Sofa</li>
              </ul>
            </div>
            <div className="absolute right-5 -bottom-2">
              <img
                src="/images/highlight/highlight-1/sofa.png"
                alt="Sofa"
                className="h-[300px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Lighting */}
          <div className="relative flex flex-col justify-between bg-gray-100 rounded-2xl p-6 flex-1 overflow-hidden">
            <div className="z-10">
              <span className="text-orange-500 font-semibold text-sm">
                450+ Items
              </span>
              <h3 className="text-2xl font-bold mt-1">Lighting</h3>
              <ul className="mt-3 text-gray-600 text-sm space-y-1">
                <li className="hover:text-black cursor-pointer">
                  Table Lights
                </li>
                <li className="hover:text-black cursor-pointer">
                  Floor Lights
                </li>
                <li className="hover:text-black cursor-pointer">
                  Ceiling Lights
                </li>
                <li className="hover:text-black cursor-pointer">Wall Lights</li>
              </ul>
            </div>
            <div className="absolute right-10 bottom-0">
              <img
                src="/images/highlight/highlight-1/light.png"
                alt="Lighting"
                className="h-[220px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight1;
