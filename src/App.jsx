import myLogo from "./assets/black.svg";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div className="app">
                    <Header />
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
