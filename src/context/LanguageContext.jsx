import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";
import enTranslations from "../translations/en.json";
import deTranslations from "../translations/de.json";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

const translations = {
  en: enTranslations,
  de: deTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "de" : "en");
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
