import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en.json";
import translationDA from "../locales/da.json";

// Translation resources for supported languages
const resources = {
  en: { translation: translationEN },
  da: { translation: translationDA },
};

// Initialize i18n configuration
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "da", // Default danish
  fallbackLng: "da", 
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
