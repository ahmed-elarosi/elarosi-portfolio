import React from "react";
import { Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
    const { isDark } = useTheme();
    const { lang, t } = useLanguage();

    const downloadCv = () => {};
};
