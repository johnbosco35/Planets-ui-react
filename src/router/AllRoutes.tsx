/** @format */

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Mercury from "../Pages/Mercury";
import Venus from "../Pages/Venus";
import Earth from "../Pages/Earth";
import Mars from "../Pages/Mars";
import Jupiter from "../Pages/Jupiter";
import Saturn from "../Pages/Saturn";
import Uranus from "../Pages/Uranus";
import Neptune from "../Pages/Neptune";
import Home from "../Pages/Home";

export const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mecury",
        index: true,
        element: <Mercury />,
      },

      {
        path: "/venus",
        element: <Venus />,
      },
      {
        path: "/earth",
        element: <Earth />,
      },
      {
        path: "/mars",
        element: <Mars />,
      },
      {
        path: "/jupiter",
        element: <Jupiter />,
      },
      {
        path: "/saturn",
        element: <Saturn />,
      },
      {
        path: "/uranus",
        element: <Uranus />,
      },
      {
        path: "/neptune",
        element: <Neptune />,
      },
    ],
  },
]);
