"use client";

import { Poppins } from "next/font/google";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserCircle02Icon,
  FavouriteIcon,
  ShoppingBasket02Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";

import { Listbox } from "@headlessui/react";
import { useState } from "react";

const languages = [
  { id: "en", name: "ENGLISH" },
  { id: "kh", name: "KHMER" },
];

const currency = [
  { id: "usd", name: "USD" },
  { id: "khr", name: "KHR" },
];

const NavIcons = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [selectedCUR, setSelectedCUR] = useState(currency[0]);

  return (
    <div className="w-1/3 h-full flex justify-center items-center space-x-4">
      {/* Language Selector */}
      <div className="relative">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Button className="text-gray-500 rounded-full px-3 py-1 bg-transparent focus:outline-none cursor-pointer flex items-center gap-2">
                <span className="w-[70px] text-start">{selected.name}</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className={`text-gray-500 transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                />
              </Listbox.Button>

              <Listbox.Options className="absolute mt-1 w-full bg-transparent shadow-lg rounded-xl outline-none cursor-pointer z-10">
                {languages.map((lang) => (
                  <Listbox.Option
                    key={lang.id}
                    value={lang}
                    className="cursor-pointer px-3 py-1 rounded-md text-gray-600"
                  >
                    {lang.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>

      <div className="relative">
        <Listbox value={selectedCUR} onChange={setSelectedCUR}>
          {({ open }) => (
            <>
              <Listbox.Button className="text-gray-500 rounded-full px-3 py-1 bg-transparent focus:outline-none cursor-pointer flex items-center gap-2">
                <span className="w-[40px] text-start">{selectedCUR.name}</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className={`text-gray-500 transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  size={24}
                />
              </Listbox.Button>

              <Listbox.Options className="absolute mt-1 w-full bg-transparent shadow-lg rounded-xl outline-none cursor-pointer z-10">
                {currency.map((lang) => (
                  <Listbox.Option
                    key={lang.id}
                    value={lang}
                    className="cursor-pointer px-3 py-1 rounded-md text-gray-600"
                  >
                    {lang.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </>
          )}
        </Listbox>
      </div>
      {/* Icons */}
      <HugeiconsIcon
        icon={UserCircle02Icon}
        className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        size={24}
      />
      <HugeiconsIcon
        icon={FavouriteIcon}
        className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        size={24}
      />
      <div className="relative inline-block cursor-pointer group">
        {/* Icon */}
        <HugeiconsIcon
          icon={ShoppingBasket02Icon}
          className="text-gray-500 group-hover:text-gray-700 transition-colors"
          size={24}
        />

        {/* Notification badge */}
        <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-[#7DB800] text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
};

export default NavIcons;
