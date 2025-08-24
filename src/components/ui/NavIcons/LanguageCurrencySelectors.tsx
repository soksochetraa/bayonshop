import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Listbox } from "@headlessui/react";
import { FC } from "react";

interface Language {
  id: string;
  name: string;
}

interface Currency {
  id: string;
  name: string;
}

interface LanguageCurrencySelectorsProps {
  languages: Language[];
  selectedLang: Language;
  onLangChange: (lang: Language) => void;
  currency: Currency[];
  selectedCUR: Currency;
  onCURChange: (cur: Currency) => void;
  isMobile: boolean;
}

const LanguageCurrencySelectors: FC<LanguageCurrencySelectorsProps> = ({
  languages,
  selectedLang,
  onLangChange,
  currency,
  selectedCUR,
  onCURChange,
  isMobile,
}) => {
  const languageWidthClass = isMobile ? "w-[70px]" : "w-[70px]";
  const currencyWidthClass = isMobile ? "" : "w-[40px]";
  const listboxOptionsClass = isMobile ? "w-[126px]" : "w-full";

  return (
    <>
      {/* Language Selector */}
      <div className="relative">
        <Listbox value={selectedLang} onChange={onLangChange}>
          {({ open }) => (
            <div>
              <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer">
                <span className={`${languageWidthClass} text-start`}>
                  {selectedLang.name}
                </span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className={`text-white transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  size={isMobile ? 24 : 24}
                />
              </Listbox.Button>

              <Listbox.Options
                className={`absolute mt-1 ${listboxOptionsClass} shadow-lg rounded-xl outline-none cursor-pointer z-10 bg-black`}
              >
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
      <div className={`relative ${isMobile ? "ml-4" : ""}`}>
        <Listbox value={selectedCUR} onChange={onCURChange}>
          {({ open }) => (
            <div>
              <Listbox.Button className="text-white rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer">
                <span className={`${currencyWidthClass} text-start`}>
                  {selectedCUR.name}
                </span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  className={`text-white transition-transform duration-200 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                  size={isMobile ? 20 : 24}
                />
              </Listbox.Button>

              <Listbox.Options
                className={`absolute mt-1 ${listboxOptionsClass} shadow-lg rounded-xl outline-none cursor-pointer z-10 bg-black`}
              >
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
    </>
  );
};

export default LanguageCurrencySelectors;
