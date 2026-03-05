import { Outlet } from "react-router";
import { useState } from "react";

import Navbar from "./components/nav-bar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "dark";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "light";
    }
  };

  return (
    <>
      <Navbar theme={theme} toogleTheme={toogleTheme} />
      <h1>App</h1>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
