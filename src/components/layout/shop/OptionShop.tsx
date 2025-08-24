import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

// Filters with sample options
const filters: Record<string, string[]> = {
  Style: ["Casual", "Formal", "Sport", "Luxury"],
  Category: ["Watches", "Bags", "Shoes", "Accessories"],
  Size: ["Small", "Medium", "Large", "Extra Large"],
  Price: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"],
  Color: ["Black", "Silver", "Gold", "Blue", "Red"],
};

const OptionShop = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const [compareItems, setCompareItems] = useState<string[]>([
    "Summit Watch",
    "Cruise Dual Analog Watch",
  ]);

  const handleRemoveCompareItem = (item: string) => {
    setCompareItems(compareItems.filter((i) => i !== item));
  };

  const handleClearAll = () => {
    setCompareItems([]);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:w-[287px] flex flex-col items-center gap-7.5 mt-[40px] md:mt-[59px] px-2 sm:px-0">
      {/* Shopping Options */}
      <div className="flex flex-col w-full">
        <h2 className="text-[#212121] font-[poppins] text-[18px] font-semibold leading-[107.5%] mb-[26px]">
          Shopping Options
        </h2>

        {/* Filters (Dynamic with sample options) */}
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
                {options.map((option, i) => (
                  <p key={i} className="py-1 hover:underline cursor-pointer">
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Compare Products */}
      <div className="w-full">
        <div className="flex flex-col xs:flex-row xs:items-center gap-1">
          <h3 className="text-[#212121] font-[poppins] text-[18px] font-semibold leading-[147.5%]">
            Compare Products
          </h3>
          <span className="text-[#828282] text-[12px] font-[poppins]">
            ({compareItems.length} items)
          </span>
        </div>

        <ul className="mt-2 space-y-2">
          {compareItems.length === 0 ? (
            <li className="text-gray-600 text-sm font-[poppins]">
              You have no items to compare.
            </li>
          ) : (
            compareItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <FaTimes
                  size={10}
                  className="cursor-pointer"
                  onClick={() => handleRemoveCompareItem(item)}
                />
                <p className="hover:underline font-[poppins] cursor-pointer">
                  {item}
                </p>
              </li>
            ))
          )}
        </ul>

        {compareItems.length > 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-3">
            <button className="bg-[#7DB800] text-white px-4 py-2 rounded-[2px] font-[poppins] text-sm cursor-pointer w-full sm:w-auto">
              Compare
            </button>
            <button
              className="text-gray-600 hover:underline font-[poppins] cursor-pointer w-full sm:w-auto"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* My Wish List */}
      <div className="mt-7.5 w-full sm:w-[285px]">
        <p className="font-[poppins] text-[18px] font-semibold">My Wish List</p>
        <p className="text-gray-600 text-sm mt-2.5 font-[poppins]">
          You have no items in your wish list.
        </p>
      </div>
    </div>
  );
};

export default OptionShop;
