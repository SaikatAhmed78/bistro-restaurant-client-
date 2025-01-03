import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import ErrorElement from "../Common/ErrorElement";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Contactus from "../Pages/Contactus";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Components/Dashboard/Cart";
import AddItems from "../Components/Dashboard/AddItems";

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

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manage-items',
                element: <Cart></Cart>
            },
            {
                path: 'add-items',
                element: <AddItems></AddItems>
            },
        ]
    }
]);

export default router;
