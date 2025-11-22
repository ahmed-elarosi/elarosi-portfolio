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
    return (
        <section
            id="home"
            className={`min-h-screen flex items-center pt-20 ${isDark ? "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        </section>
    );
};
