import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaPlus, FaEdit, FaCalendarAlt, FaUsers, FaConciergeBell, FaStore, FaAddressBook, FaCartArrowDown } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const menuItems = [
    { to: "/dashboard", label: "Admin Home", icon: <FaHome />, end: true },
    { to: "/dashboard/add-items", label: "Add Items", icon: <FaPlus /> },
    { to: "/dashboard/manage-items", label: "Manage Items", icon: <FaEdit /> },
    { to: "/dashboard/manage-bookings", label: "Manage Bookings", icon: <FaCalendarAlt /> },
    { to: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
];

const extraLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/menu", label: "Menu", icon: <FaConciergeBell /> },
    { to: "/shop/:category", label: "Shop", icon: <FaStore /> },
    { to: "/contactUs", label: "Contact", icon: <FaAddressBook /> },
];

const Dashboard = () => {
    const [cart] = useCart();
    const { isAdmin, isAdminLoading } = useAdmin();
    const navigate = useNavigate();

    return (
        <div className='flex h-screen bg-gradient-to-tr from-gray-100 to-gray-300'>
            <aside className="fixed w-64 h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg p-6">
                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Admin Dashboard</h2>
                <ul className='space-y-4'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                end={item.end}
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
                <div className='space-y-4 mt-auto'>
                    <NavLink
                        to="/dashboard/cart"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${isActive ? "bg-white text-yellow-500 shadow" : "text-white hover:bg-yellow-600 hover:bg-opacity-50"}`
                        }
                    >
                        <FaCartArrowDown className="w-5 h-5" />
                        <span>Cart ({cart.length})</span>
                    </NavLink>
                </div>
            </aside>
            <main className='ml-64 flex-1 p-10 bg-white shadow-inner rounded-lg overflow-y-auto'>
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
