import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { router } from "./router";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient">
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
};
