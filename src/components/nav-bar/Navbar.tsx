import { NavLink } from "react-router";

const Navbar = ({
  theme,
  toogleTheme,
}: {
  theme: string;
  toogleTheme: () => void;
}) => {
  let textTheme = theme === "light" ? "dark" : "light";
  return (
    <nav className={`navbar bg-${theme}`}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onClick={toogleTheme}
          style={{ cursor: "pointer" }}
        />
        <label
          className={`form-check-label text-${textTheme}`}
          htmlFor="switchCheckDefault"
        >
          {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
