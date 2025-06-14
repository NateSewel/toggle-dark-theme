import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  // State to manage the theme
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  // Effect to update the local storage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
