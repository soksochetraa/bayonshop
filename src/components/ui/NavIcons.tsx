"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

// Import the new components
import DesktopNav from "./NavIcons/DesktopNav";
import MobileMenuButton from "./NavIcons/MobileMenuButton";
import MobileSidebar from "./NavIcons/MobileSidebar";

interface Language {
  id: string;
  name: string;
}

interface Currency {
  id: string;
  name: string;
}

interface MenuItem {
  name: string;
  path: string;
}

const languages: Language[] = [
  { id: "en", name: "ENGLISH" },
  { id: "kh", name: "KHMER" },
];

const currency: Currency[] = [
  { id: "usd", name: "USD" },
  { id: "khr", name: "KHR" },
];

const menuItems: MenuItem[] = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Product", path: "/product" },
  { name: "Elements", path: "/elements" },
  { name: "Blog", path: "/blog" },
];

const NavIcons = () => {
  const [selected, setSelected] = useState<Language>(languages[0]);
  const [selectedCUR, setSelectedCUR] = useState<Currency>(currency[0]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="relative flex items-center">
      {/* Mobile-only hamburger button */}
      <MobileMenuButton onToggle={() => setMenuOpen(!menuOpen)} />

      {/* Mobile Sidebar and Overlay */}
      <MobileSidebar
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
        menuItems={menuItems}
        languages={languages}
        selectedLang={selected}
        onLangChange={setSelected}
        currency={currency}
        selectedCUR={selectedCUR}
        onCURChange={setSelectedCUR}
      />

      {/* Desktop Navigation */}
      <DesktopNav
        languages={languages}
        selectedLang={selected}
        onLangChange={setSelected}
        currency={currency}
        selectedCUR={selectedCUR}
        onCURChange={setSelectedCUR}
      />
    </div>
  );
};

export default NavIcons;
