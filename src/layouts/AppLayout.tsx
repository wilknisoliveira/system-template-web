import { Outlet } from "react-router";

import Navbar from "../components/nav-bar/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default AppLayout;
