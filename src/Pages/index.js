import { Navigate } from "react-router-dom";
import HomePage, { AboutUs } from "./HomePage/HomePage";

export const routeConfig = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
];
