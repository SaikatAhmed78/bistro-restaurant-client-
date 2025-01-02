import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaPlus, FaEdit, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const menuItems = [
    { to: "/dashboard", label: "Admin Home", icon: <FaHome /> },
    { to: "/dashboard/add-items", label: "Add Items", icon: <FaPlus /> },
    { to: "/dashboard/manage-items", label: "Manage Items", icon: <FaEdit /> },
    { to: "/dashboard/manage-bookings", label: "Manage Bookings", icon: <FaCalendarAlt /> },
    { to: "/dashboard/all-users", label: "All Users", icon: <FaUsers /> },
];

const Dashboard = () => {
    return (
        <div className='flex h-screen'>
            <aside className="w-64 min-h-full bg-[#d1a054] p-6">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Admin Dashboard</h2>
                <ul className='space-y-4'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => 
                                    `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
                                        isActive ? "bg-white text-yellow-500" : "text-white hover:bg-yellow-600 hover:bg-opacity-50"
                                    }`
                                }
                            >
                                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className='flex-1 p-6 bg-gray-100'>
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;