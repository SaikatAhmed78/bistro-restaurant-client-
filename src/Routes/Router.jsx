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
import PrivateRoute from "../Secure/PrivateRoute";
import AllUsers from "../Components/Dashboard/AllUsers";
import AdminRoute from "../Secure/AdminRoute";
import ErrorPage from "../Common/Dashboard Error page/ErrorPage";
import ManageItems from "../Components/Dashboard/ManageItems";
import UpdateItem from "../Components/Dashboard/UpdateItem";
import Payment from "../Components/Dashboard/Payment";
import PaymentHistory from "../Components/ContactUs/PaymentHistory";
import AdminHome from "../Components/Dashboard/AdminHome";
import UserHome from "../Components/Dashboard/UserHome";
import ManageBookings from "../Components/Dashboard/ManageBookings";
import AddReview from "../Components/Dashboard/AddReviewu";
import MyBookingu from "../Components/Dashboard/MyBookingu";

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
        element:
            <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'my-cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'add-reviewu',
                element: <AddReview></AddReview>
            },
            {
                path: 'my-bookingu',
                element: <MyBookingu></MyBookingu>
            },

            // Admin Only

            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'manage-bookingsa',
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            {
                path: 'update-item/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-restaurant-rho.vercel.app/menu/${params.id}`)
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
]);

export default router;
