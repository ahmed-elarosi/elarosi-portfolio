import React, { useState } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import myLogo from "../assets/black.svg";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isDark
          ? "bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95"
          : "bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95"
      } backdrop-blur-sm shadow-lg transition-all duration-300`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" target="_blank">
            <img src={myLogo} className="logo react" alt="My Logo" />
          </a>
          {/* <h1
                        className={`text-2xl font-bold bg-gradient-to-r ${
                            isDark ? "from-blue-400 to-purple-400" : "from-blue-600 to-purple-600"
                        } bg-clip-text text-transparent`}
                    >
                        Ahmed Elarosi
                    </h1> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  isDark
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                } transition-all duration-300 font-medium`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-yellow-300"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700"
              } hover:scale-110 transition-transform shadow-md`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gradient-to-r from-purple-100 to-blue-100 text-gray-700"
              } hover:scale-110 transition-transform flex items-center space-x-1 shadow-md`}
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDark
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 ${
              isDark
                ? "bg-gradient-to-br from-gray-800 to-purple-900"
                : "bg-gradient-to-br from-gray-50 to-blue-50"
            } rounded-lg p-4 shadow-xl`}
          >
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 ${
                  isDark
                    ? "text-gray-300 hover:text-purple-300"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
