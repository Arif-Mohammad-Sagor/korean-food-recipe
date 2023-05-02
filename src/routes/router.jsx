import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Blog from '../pages/Blog';
import Recipe from '../pages/Recipe';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => {
          return fetch("http://localhost:3000/chefs");
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefs/:id",
        element: <Recipe></Recipe>,
        loader: (params) =>
          fetch(`http://localhost:3000/chefs/${params.id}`),
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

export default router