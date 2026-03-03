import { Outlet } from "react-router";

import Navbar from "./components/nav-bar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
