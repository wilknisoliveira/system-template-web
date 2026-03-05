import { NavLink } from "react-router";

import "./Navbar.scss";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navbar = () => {
  return (
    <nav className={`navbar`}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
