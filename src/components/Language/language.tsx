import "flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

// Component for language switching between Danish and English
export function Language() {
  const { i18n } = useTranslation();

  // Change language and save to localStorage
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);                 
    localStorage.setItem("language", lang);         
  };

  return (
    <div className="flex items-center gap-3">
      {/* Danish flag - switch to Danish */}
      <span 
        className="fi fi-dk text-3xl cursor-pointer" 
        onClick={() => changeLanguage("da")}
      ></span>
      
      {/* Separator */}
      <span className="text-2xl">/</span>
      
      {/* British flag - switch to English */}
      <span 
        className="fi fi-gb text-3xl cursor-pointer" 
        onClick={() => changeLanguage("en-US")}
      ></span>
    </div>
  );
}
