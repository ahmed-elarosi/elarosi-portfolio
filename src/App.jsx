import { useState } from "react";
import myLogo from "./assets/black.svg";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);
    return (
        <ThemeProvider>
            <Header />
            <div className="header">
                <a href="/home" target="_blank">
                    <img src={myLogo} className="logo react" alt="My Logo" />
                </a>
                <h1>Ahmed Elarosi</h1>
            </div>
        </ThemeProvider>
    );
}

export default App;
