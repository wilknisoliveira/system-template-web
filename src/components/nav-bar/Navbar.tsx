import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
