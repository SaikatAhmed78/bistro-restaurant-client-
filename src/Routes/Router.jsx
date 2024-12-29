import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import ErrorElement from "../Common/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
      ]
    },
  ]);

  export default router;