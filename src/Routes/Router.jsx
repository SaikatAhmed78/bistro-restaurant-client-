import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import ErrorElement from "../Common/ErrorElement";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Contactus from "../Pages/Contactus";

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
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/shop/:category',
            element: <OurShop></OurShop>
        },
        {
            path: '/contactUs',
            element: <Contactus></Contactus>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);

  export default router;