const ThemeToggle = () => {
  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme: string) =>
    localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme: string) => {
    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  setTheme(getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  const toggleTheme = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
      setStoredTheme("dark");
    } else {
      setTheme("light");
      setStoredTheme("light");
    }
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
        defaultChecked={getPreferredTheme() === "dark"}
      />
      <label className={`form-check-label`} htmlFor="switchCheckDefault">
        {getPreferredTheme() === "light"
          ? "Enable Dark Mode"
          : "Enable Light Mode"}
      </label>
    </div>
  );
};

export default ThemeToggle;
