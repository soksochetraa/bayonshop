// src/components/layout/shop/OptionShop.tsx
"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useShop } from "./ShopContext";

// Filters with numeric ranges for Price
const filters: Record<string, { label: string; range?: [number, number] }[]> = {
  Style: [
    { label: "All" },
    { label: "Casual" },
    { label: "Formal" },
    { label: "Sport" },
    { label: "Luxury" },
  ],
  Category: [
    { label: "All" },
    { label: "Watches" },
    { label: "Bags" },
    { label: "Shoes" },
    { label: "Accessories" },
    { label: "Chair" },
    { label: "Table" },
    { label: "Sofa" },
    { label: "Decor" },
    { label: "Home" },
    { label: "Furniture" },
    { label: "Kitchen" },
    { label: "Bath" },
    { label: "Garden" },
    { label: "Office" },
    { label: "Fitness" },
    { label: "Electronics" },
  ],
  Size: [
    { label: "All" },
    { label: "Small" },
    { label: "Medium" },
    { label: "Large" },
    { label: "Extra Large" },
  ],
  Price: [
    { label: "All" },
    { label: "$0 - $50", range: [0, 50] },
    { label: "$50 - $100", range: [50, 100] },
    { label: "$100 - $200", range: [100, 200] },
    { label: "$200+", range: [200, Infinity] },
  ],
  Color: [
    { label: "All" },
    { label: "Black" },
    { label: "Silver" },
    { label: "Gold" },
    { label: "Blue" },
    { label: "Red" },
    { label: "Brown" },
  ],
};

const OptionShop = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const { selectedFilters, setSelectedFilters } = useShop();

  const handleSelectFilter = (filter: string, option: string) => {
    setSelectedFilters({ ...selectedFilters, [filter]: option });
  };

  const handleResetFilters = () => {
    const reset: Record<string, string> = {};
    Object.keys(filters).forEach((key) => {
      reset[key] = "All";
    });
    setSelectedFilters(reset);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:w-[287px] flex flex-col items-center gap-7.5 mt-[40px] md:mt-[59px] px-2 sm:px-0 ">
      {/* Shopping Options */}
      <div className="flex flex-col w-full">
        <h2 className="text-[#212121] font-[poppins] text-[18px] font-semibold leading-[107.5%] mb-[26px]">
          Shopping Options
        </h2>

        {Object.entries(filters).map(([filter, options], index, arr) => (
          <div
            key={filter}
            className={`border-t ${
              index === arr.length - 1 ? "border-b" : ""
            } text-[#DEDEDE] py-1 flex flex-col cursor-pointer`}
          >
            <div
              className="flex justify-between items-center"
              onClick={() =>
                setOpenFilter(openFilter === filter ? null : filter)
              }
            >
              <span className="text-[#4F4F4F] font-[poppins] text-[15px] font-light leading-[38px]">
                {filter}
              </span>
              <FaChevronDown
                className={`text-gray-500 transition-transform duration-300 ${
                  openFilter === filter ? "rotate-180" : ""
                }`}
                size={10}
              />
            </div>

            {openFilter === filter && (
              <div className="pl-2 py-1 text-sm text-gray-600 font-[poppins]">
                {options.map((optionObj, i) => (
                  <p
                    key={i}
                    className={`py-1 hover:underline cursor-pointer ${
                      selectedFilters[filter] === optionObj.label
                        ? "font-semibold text-[#7DB800]"
                        : ""
                    }`}
                    onClick={() => handleSelectFilter(filter, optionObj.label)}
                  >
                    {optionObj.label}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Reset Filters Button */}
        <button
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-[poppins] text-sm"
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default OptionShop;
