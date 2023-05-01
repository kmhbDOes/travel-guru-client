import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Booking from "../pages/Booking/Booking";
import Destination from "../pages/Destination/Destination";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";

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
        children: [
          {
            path: ":id",
            element: (
              <PrivateRoute>
                <Booking></Booking>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/destination/${params.id}`)
                .then((res) => res.json())
                .catch((error) => console.error(error)),
          },
        ],
      },
    ],
  },
]);
export default router;
