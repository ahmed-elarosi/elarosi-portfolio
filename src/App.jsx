import { useState } from "react";
import myLogo from "./assets/black.svg";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <ThemeProvider>
            <div className="header">
                <a href="/home" target="_blank">
                    <img src={myLogo} className="logo react" alt="My Logo" />
                </a>
                <h1>Ahmed Elarosi</h1>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count (+) </button>
                <button onClick={() => setCount((count) => count - 1)}>count (-) </button>
                <button onClick={() => setCount((count) => count - count)}>Rest </button>
            </div>
            <div>
                <button className="result">{count}</button>
            </div>
        </ThemeProvider>
    );
}

export default App;
