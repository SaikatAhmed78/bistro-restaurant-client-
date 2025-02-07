import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaPlus, FaEdit, FaCalendarAlt, FaUsers, FaConciergeBell, FaStore, FaAddressBook, FaCartArrowDown } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const adminMenuItems = [
    { to: "/dashboard/adminHome", label: "Admin Home", icon: <FaHome />, end: true },
    { to: "/dashboard/add-items", label: "Add Items", icon: <FaPlus /> },
    { to: "/dashboard/manage-items", label: "Manage Items", icon: <FaEdit /> },
    { to: "/dashboard/manage-bookingsa", label: "Manage Bookings", icon: <FaCalendarAlt /> },
    { to: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
];

const userMenuItems = [
    { to: "/dashboard/userHome", label: "User Home", icon: <FaHome />, end: true },
    { to: "/dashboard/payment", label: "Reservation", icon: <FaCalendarAlt /> },
    { to: "/dashboard/paymentHistory", label: "Payment History", icon: <FaStore /> },
    { to: "/dashboard/my-cart", label: "My Cart", icon: <FaCartArrowDown />, extra: true },
    { to: "/dashboard/add-reviewu", label: "Add Review", icon: <FaPlus /> },
    { to: "/dashboard/my-bookingu", label: "My Booking", icon: <FaCalendarAlt /> },
];

const extraLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/menu", label: "Menu", icon: <FaConciergeBell /> },
    { to: "/shop/:category", label: "Shop", icon: <FaStore /> },
    { to: "/contactUs", label: "Contact", icon: <FaAddressBook /> },
];

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin, isAdminLoading] = useAdmin();
    const navigate = useNavigate();


    return (
        <div className='flex h-screen bg-gradient-to-tr from-gray-100 to-gray-300'>
            <aside className="fixed w-64 h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg p-6">
                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Bistro Boss Dashboard</h2>
                <ul className='space-y-4'>
                    {(isAdmin ? adminMenuItems : userMenuItems).map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${isActive ? "bg-white text-yellow-500 shadow" : "text-white hover:bg-yellow-600 hover:bg-opacity-50"}`
                                }
                            >
                                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                <span>
                                    {item.label}
                                    {item.extra ? ` (${cart.length})` : ''}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <hr className="my-6 border-t border-yellow-600" />
                <ul className='space-y-4'>
                    {extraLinks.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${isActive ? "bg-white text-yellow-500 shadow" : "text-white hover:bg-yellow-600 hover:bg-opacity-50"}`
                                }
                            >
                                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className='ml-64 flex-1 p-10 bg-white shadow-inner rounded-lg overflow-y-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
