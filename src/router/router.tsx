import { createBrowserRouter } from "react-router-dom";
import { Home, Movie } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
