import { useEffect, useState, type ChangeEvent } from "react";

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
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="switchCheckDefault"
        onChange={toggleTheme}
        style={{ cursor: "pointer" }}
        checked={theme === "dark"}
      />
      <label className="form-check-label" htmlFor="switchCheckDefault">
        {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
      </label>
    </div>
  );
};

export default ThemeToggle;
