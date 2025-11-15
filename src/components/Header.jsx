import React, { useState } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <header>
            <nav>
                <div>
                    <h1>Ahmed Elarosi</h1>
                </div>
            </nav>
        </header>
    );
};
