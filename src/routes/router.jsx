import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Recipe from "../pages/Recipe";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ProtectRoute from "./ProtectRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import HotRecipes from "../pages/shared/HotRecipes/HotRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => {
          return fetch(
            "https://assignment10-server-arif-mohammad-sagor.vercel.app/chefs"
          );
        },
      },
      {
        path: "/chefs/:id",
        element: (
          <ProtectRoute>
            <Recipe></Recipe>
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-arif-mohammad-sagor.vercel.app/chefs/${params.id}`
          ),
      },

      {
        path: "/recipes",
        element: <HotRecipes></HotRecipes>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
