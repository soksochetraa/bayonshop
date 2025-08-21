import { FaBars } from "react-icons/fa";
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

const menuItems = ["Home", "Product", "Elements", "Shop", "Blog"];

const NavIcons = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [selectedCUR, setSelectedCUR] = useState(currency[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div className="relative flex items-center">
      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 focus:outline-none text-white"
        >
          {menuOpen ? <FaBars size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Full-screen Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } md:hidden`}
      />

      {/* Sidebar Menu - Mobile */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-black p-4 shadow-lg md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-9/12`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-white">
            <img src="/icons/logo.svg" alt="" />
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 focus:outline-none text-white"
          >
            <FaBars size={28} />
          </button>
        </div>

        {/* BOTTOM Menu (Vertical) */}
        <ul className="flex flex-col space-y-2 mb-4">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActiveItem(item);
                setMenuOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer rounded transition-colors ${
                activeItem === item
                  ? "bg-[#7DB800] text-white"
                  : "text-white hover:bg-[#7DB800]/30"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-start space-y-4">
          {/* User, Favorites & Cart */}
          <div className="flex space-x-4 mx-2.5">
            <HugeiconsIcon
              icon={UserCircle02Icon}
              className="text-white hover:text-gray-700 transition-colors cursor-pointer"
              size={24}
            />
            <HugeiconsIcon
              icon={FavouriteIcon}
              className="text-white hover:text-gray-700 transition-colors cursor-pointer"
              size={24}
            />
            <div className="relative inline-block cursor-pointer group">
              <HugeiconsIcon
                icon={ShoppingBasket02Icon}
                className="text-white group-hover:text-gray-700 transition-colors"
                size={24}
              />
              <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-[#7DB800] text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
          <div className="flex justify-start">
            {/* Language Selector */}
            <div className="relative">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <div>
                    <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer">
                      <span className="w-[70px] text-start">
                        {selected.name}
                      </span>
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        className={`text-white transition-transform duration-200 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        size={24}
                      />
                    </Listbox.Button>

                    <Listbox.Options className="absolute mt-1 w-[126px] shadow-lg rounded-xl outline-none cursor-pointer z-10">
                      {languages.map((lang) => (
                        <Listbox.Option
                          key={lang.id}
                          value={lang}
                          className="cursor-pointer px-3 py-1 rounded-md text-white hover:text-[#7db800]"
                        >
                          {lang.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                )}
              </Listbox>
            </div>
            {/* Currency Selector */}
            <div className="relative mr-5">
              <Listbox value={selectedCUR} onChange={setSelectedCUR}>
                {({ open }) => (
                  <div>
                    <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer ">
                      <span>{selectedCUR.name}</span>
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        className={`text-white transition-transform duration-200 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        size={20}
                      />
                    </Listbox.Button>

                    <Listbox.Options className="absolute w-[126px] mt-1 shadow-lg rounded-xl outline-none cursor-pointer z-10">
                      {currency.map((cur) => (
                        <Listbox.Option
                          key={cur.id}
                          value={cur}
                          className="cursor-pointer px-3 py-1 rounded-md text-white hover:text-[#7db800]"
                        >
                          {cur.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div>
                <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer">
                  <span className="w-[70px] text-start">{selected.name}</span>
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className={`text-white transition-transform duration-200 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    size={24}
                  />
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 w-full rounded-xl outline-none cursor-pointer z-10">
                  {languages.map((lang) => (
                    <Listbox.Option
                      key={lang.id}
                      value={lang}
                      className="cursor-pointer px-3 py-1 rounded-md text-white hover:text-[#7db800]"
                    >
                      {lang.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </div>

        {/* Currency Selector */}
        <div className="relative">
          <Listbox value={selectedCUR} onChange={setSelectedCUR}>
            {({ open }) => (
              <div>
                <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer ">
                  <span className="w-[40px] text-start">
                    {selectedCUR.name}
                  </span>
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className={`text-white transition-transform duration-200 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    size={24}
                  />
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 w-full rounded-xl outline-none cursor-pointer z-10">
                  {currency.map((cur) => (
                    <Listbox.Option
                      key={cur.id}
                      value={cur}
                      className="cursor-pointer px-3 py-1 rounded-md text-white hover:text-[#7db800]"
                    >
                      {cur.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </Listbox>
        </div>

        {/* User, Favorites & Cart */}
        <div className="flex space-x-4">
          <HugeiconsIcon
            icon={UserCircle02Icon}
            className="text-white hover:text-gray-700 transition-colors cursor-pointer"
            size={24}
          />
          <HugeiconsIcon
            icon={FavouriteIcon}
            className="text-white hover:text-gray-700 transition-colors cursor-pointer"
            size={24}
          />
          <div className="relative inline-block cursor-pointer group">
            <HugeiconsIcon
              icon={ShoppingBasket02Icon}
              className="text-white group-hover:text-gray-700 transition-colors"
              size={24}
            />
            <span className="absolute top-0 -right-0 -translate-x-1/4 -translate-y-1/4 bg-[#7DB800] text-white text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
