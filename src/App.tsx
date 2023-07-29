import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

export const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
