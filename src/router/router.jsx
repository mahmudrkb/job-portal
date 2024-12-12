import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Register from "../page/Register";
import SignIn from "../page/SignIn";
import Home from "../page/home/Home";
import JobDetails from "../page/home/JobDetails";
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
        element:<JobDetails></JobDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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
