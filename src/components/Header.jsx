import React, { useState } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const { lang, toggleLanguage, t } = useLanguage();
    return (
        <header
            className={`fixed top-0 w-full z-50 ${
                isDark
                    ? "bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95"
                    : "bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95"
            } backdrop-blur-sm shadow-lg transition-all duration-300`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1
                        className={`text-2xl font-bold bg-gradient-to-r ${
                            isDark ? "from-blue-400 to-purple-400" : "from-blue-600 to-purple-600"
                        } bg-clip-text text-transparent`}
                    >
                        Ahmed Elarosi
                    </h1>
                </div>
            </nav>
        </header>
    );
};
