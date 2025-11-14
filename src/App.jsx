import { useState } from "react";
import myLogo from "./assets/black.svg";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>Ahmed Elarosi</h1>
                <a href="/home" target="_blank">
                    <img src={myLogo} className="logo react" alt="My Logo" />
                </a>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </>
    );
}

export default App;
