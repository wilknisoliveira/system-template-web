import { useEffect, useState, type ChangeEvent } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ThemeToggle = () => {
  const getStoredTheme = () => localStorage.getItem("theme");

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return "auto";
  };

  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const applyTheme = (theme: string) => {
    const resolvedTheme =
      theme != "dark" && theme != "light" ? getSystemTheme() : theme;

    document.documentElement.setAttribute("data-bs-theme", resolvedTheme);
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="secondary"
      title={`${theme}`}
    >
      <Dropdown.Item onClick={() => setTheme("auto")}>auto</Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("light")}>light</Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("dark")}>dark</Dropdown.Item>
    </DropdownButton>
  );
};

export default ThemeToggle;
