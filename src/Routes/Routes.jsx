import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Destination from "../pages/Destination/Destination";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
    ],
  },
]);
export default router;
