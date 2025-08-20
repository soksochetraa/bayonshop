"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Poppins } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const menuItems = ["Home", "Product", "Elements", "Shop", "Blog"];

const Navigation = () => {
  const [active, setActive] = useState("Home");
  const [lineStyle, setLineStyle] = useState({});
  const ulRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

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
    <nav
      className={`w-full md:w-full flex flex-col items-center justify-between relative px-[20px] py-[10px] md:px-[40px] md:py-[20px] transition-colors duration-300 ${
        isHome ? "bg-transparent" : "bg-[#212121]"
      }`}
    >
      {/* TOP */}
      <div className="w-full px-6 py-2 flex items-center justify-between">
        <SearchBar />
        <span className="w-auto flex items-center justify-center">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={155}
            height={54}
            className="cursor-pointer"
          />
        </span>
        {/* Desktop & Mobile icons */}
        <NavIcons />
      </div>

      {/* BOTTOM - Desktop only */}
      <div className="hidden md:flex w-full px-6 py-2 items-center justify-center">
        <ul ref={ulRef} className="relative flex">
          {menuItems.map((item) => (
            <li
              key={item}
              ref={(el) => {
                itemRefs.current[item] = el;
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
