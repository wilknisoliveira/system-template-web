const ThemeToggle = () => {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const selectedTheme = localStorage.getItem("theme");
  let textColor = selectedTheme === "dark" ? "light" : "dark";
  if (selectedTheme === "dark") {
    setDarkMode();
    textColor = "light";
  }

  const toggleTheme = (e: any) => {
    if (e.target.checked) {
      setDarkMode();
      textColor = "light";
    } else {
      setLightMode();
      textColor = "dark";
    }
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="switchCheckDefault"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
        defaultChecked={selectedTheme === "dark"}
      />
      <label
        className={`form-check-label text-${textColor}`}
        htmlFor="switchCheckDefault"
      >
        {selectedTheme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
      </label>
    </div>
  );
};

export default ThemeToggle;
