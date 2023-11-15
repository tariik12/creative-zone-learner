import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-center text-orange-700">Hello world!</div>,
    },
  ]);