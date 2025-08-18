"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Poppins } from "next/font/google";
import { useState, useRef, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navigation = () => {
  const [active, setActive] = useState("Home");
  const [lineStyle, setLineStyle] = useState({});
  const ulRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const menu = ["Home", "Product", "Elements", "Shop", "Blog"];

  useEffect(() => {
    const activeEl = itemRefs.current[active];
    if (activeEl && ulRef.current) {
      const center = activeEl.offsetLeft + activeEl.offsetWidth / 2 - 25;
      setLineStyle({
        left: center,
        width: 50,
      });
    }
  }, [active]);

  return (
    <nav className="w-full h-[170px] flex flex-col items-center justify-between relative px-[40px] py-[40px]">
      {/* TOP */}
      <div className="w-full px-6 py-2 flex items-center justify-between">
        <SearchBar />
        <span className="w-1/3 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={155}
            height={54}
            className="cursor-pointer"
          />
        </span>
        <NavIcons />
      </div>

      {/* BOTTOM */}
      <div className="w-full px-6 py-2 flex items-center justify-center">
        <ul ref={ulRef} className="relative">
          {menu.map((item) => (
            <li
              key={item}
              ref={(el) => {
                itemRefs.current[item] = el; // ✅ no return
              }}
              onClick={() => setActive(item)}
              className={`inline-block px-4 py-2 cursor-pointer transition-colors ${
                active === item
                  ? "text-[#7db800]"
                  : "text-white hover:text-[#7db800]"
              }`}
            >
              {item}
            </li>
          ))}
          <span
            className="absolute bottom-0 h-[2px] rounded-full bg-[#7db800] transition-all duration-300"
            style={lineStyle}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
