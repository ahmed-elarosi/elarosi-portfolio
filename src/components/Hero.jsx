import React from "react";
import { Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
    const { isDark } = useTheme();
    const { lang, t } = useLanguage();

    const downloadCv = () => {
        const cvUrl = lang === "en" ? "assets/CV_EN.pdf" : "/assets/CV_DE.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = `Ahmed_Elarosi_CV_${lang.toUpperCase()}.pdf`;
        link.click();
    };
};
