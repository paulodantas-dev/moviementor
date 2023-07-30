import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient">
      <RouterProvider router={router} />
    </div>
  );
};
