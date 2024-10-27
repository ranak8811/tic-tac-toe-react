import "./App.css";
import Game from "./Game";
import "./CSS/light.css";
import "./CSS/dark.css";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  return (
    <div className="container">
      <h1>Welcome to React Page</h1>
      <p>This is a simple example of applying a light theme.</p>
      <button className="bg-white" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <Game />
    </div>
  );
}

export default App;
