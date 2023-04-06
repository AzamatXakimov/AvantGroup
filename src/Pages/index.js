import { Navigate } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutUs from "./AboutUs/AboutUs";

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
