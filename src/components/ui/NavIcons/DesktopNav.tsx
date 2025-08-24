import LanguageCurrencySelectors from "./LanguageCurrencySelectors";
import IconGroup from "./IconGroup";

interface Language {
  id: string;
  name: string;
}

interface Currency {
  id: string;
  name: string;
}

interface DesktopNavProps {
  languages: Language[];
  selectedLang: Language;
  onLangChange: (lang: Language) => void;
  currency: Currency[];
  selectedCUR: Currency;
  onCURChange: (cur: Currency) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  languages,
  selectedLang,
  onLangChange,
  currency,
  selectedCUR,
  onCURChange,
}) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <LanguageCurrencySelectors
        languages={languages}
        selectedLang={selectedLang}
        onLangChange={onLangChange}
        currency={currency}
        selectedCUR={selectedCUR}
        onCURChange={onCURChange}
        isMobile={false}
      />
      <IconGroup />
    </div>
  );
};

export default DesktopNav;
