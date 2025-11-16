import React, { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "../translations/en.json";
import deTranslations from "../translations/de.json";

const languageContext = createContext();

export const useLanguage = () => {
    const context = useContext(languageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
