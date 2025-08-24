import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MobileMenuItems from "./MobileMenuItems";
import IconGroup from "./IconGroup";
import LanguageCurrencySelectors from "./LanguageCurrencySelectors";

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

interface MobileSidebarProps {
  menuOpen: boolean;
  onClose: () => void;
  pathname: string;
  menuItems: MenuItem[];
  languages: Language[];
  selectedLang: Language;
  onLangChange: (lang: Language) => void;
  currency: Currency[];
  selectedCUR: Currency;
  onCURChange: (cur: Currency) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  menuOpen,
  onClose,
  pathname,
  menuItems,
  languages,
  selectedLang,
  onLangChange,
  currency,
  selectedCUR,
  onCURChange,
}) => {
  return (
    <>
      {/* Full-screen Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } md:hidden`}
      />

      {/* Sidebar Menu - Mobile */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-black p-4 shadow-lg md:hidden transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-9/12`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-white">
            <img src="/icons/logo.svg" alt="Logo" />
          </span>
          <button
            onClick={onClose}
            className="p-2 focus:outline-none text-white"
          >
            <FaBars size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <MobileMenuItems
          menuItems={menuItems}
          pathname={pathname}
          onClose={onClose}
        />

        {/* Mobile bottom section */}
        <div className="flex flex-col justify-start space-y-4">
          <div className="flex space-x-4 mx-2.5">
            <IconGroup />
          </div>
          <div className="flex justify-start">
            <LanguageCurrencySelectors
              languages={languages}
              selectedLang={selectedLang}
              onLangChange={onLangChange}
              currency={currency}
              selectedCUR={selectedCUR}
              onCURChange={onCURChange}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
