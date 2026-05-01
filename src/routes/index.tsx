import { Navigate, type RouteObject } from "react-router";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
