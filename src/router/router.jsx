import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Register from "../page/Register";
import SignIn from "../page/SignIn";
import Home from "../page/home/Home";
import JobDetails from "../page/home/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../page/JobApply";
import MyApplication from "../page/home/MyApplication";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Router not found</h2>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/jobs/:id",
        element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },

      {
        path:"/jobApply/:id",
        element:<PrivateRouter><JobApply></JobApply></PrivateRouter>,
      },
      {
        path:"/myApplication",
        element: <PrivateRouter><MyApplication></MyApplication></PrivateRouter>

      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
