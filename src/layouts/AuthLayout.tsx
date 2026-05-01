import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default AuthLayout;
