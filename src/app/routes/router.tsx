import { createBrowserRouter } from "react-router-dom";
import { Schedule } from "../../pages/Schedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Schedule />,
  },
]);
