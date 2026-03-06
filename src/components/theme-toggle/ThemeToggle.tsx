import { useEffect, useState, type ReactNode } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdLaptop } from "react-icons/md";

import "./ThemeToggle.scss";

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

  const getButtonIcon = (theme: string) => {
    switch (theme) {
      case "dark":
        return <MdDarkMode />;
      case "light":
        return <MdLightMode />;
      default:
        return <MdLaptop />;
    }
  };

  const [theme, setTheme] = useState(getPreferredTheme());
  const [buttonIcon, setButtonIcon] = useState<ReactNode | null>(null);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
    setButtonIcon(getButtonIcon(theme));
  }, [theme]);

  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="secondary"
      title={buttonIcon}
    >
      <Dropdown.Item onClick={() => setTheme("auto")}>
        <MdLaptop /> auto
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("light")}>
        <MdLightMode /> light
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("dark")}>
        <MdDarkMode /> dark
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default ThemeToggle;
