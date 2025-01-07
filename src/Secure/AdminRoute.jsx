import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { RingLoader } from 'react-spinners';


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { isAdmin, isAdminLoading } = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <RingLoader color="#facc15" size={100} speedMultiplier={1.2} />
                <p className="text-yellow-400 mt-4 font-semibold text-lg">Loading, please wait...</p>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace />;
};

export default AdminRoute;
