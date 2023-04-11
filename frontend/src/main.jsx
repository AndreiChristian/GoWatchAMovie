import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Movies from "./components/Movies";
import ErrorPage from "./components/ErrorPage";
import Graphql from "./components/Graphql";
import EditMovies from "./components/EditMovies";
import ManageCatalog from "./components/ManageCatalog";
import Login from "./components/Login";
import Genres from "./components/Genres";
import Movie from "./components/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <Movie /> },
      { path: "/genres", element: <Genres /> },
      { path: "/graphql", element: <Graphql /> },
      { path: "/admin/movies/0", element: <EditMovies /> },
      { path: "/admin", element: <ManageCatalog /> },
      { path: "/login", element: <Login /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
