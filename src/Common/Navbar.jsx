import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaPhoneAlt, FaTachometerAlt, FaUtensils, FaStore, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {

    const NavItem = ({ to, icon, label }) => (
        <li className="text-lg">
            <NavLink
                to={to}
                className={({ isActive }) => 
                    `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${
                        isActive ? "text-yellow-300 bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-700"
                    }`
                }
            >
                {React.cloneElement(icon, { className: 'w-5 h-5' })}
                <span>{label}</span>
            </NavLink>
        </li>
    );

    return (
        <nav className="bg-black bg-opacity-70 fixed w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">

            <div className="lg:hidden">
                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 p-4 space-y-3 shadow bg-gray-900 rounded-md w-52"
                        >
                            <NavItem to="/" icon={<FaHome />} label="Home" />
                            <NavItem to="/contact" icon={<FaPhoneAlt />} label="Contact Us" />
                            <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
                            <NavItem to="/menu" icon={<FaUtensils />} label="Our Menu" />
                            <NavItem to="/shop" icon={<FaStore />} label="Our Shop" />
                            <NavItem to="/signout" icon={<FaSignOutAlt />} label="Sign Out" />
                        </ul>
                    </div>
                </div>

                <Link to="/" className="text-2xl font-bold text-white tracking-wide">
                    BISTRO BOSS <br />
                    <span className="text-yellow-400">RESTAURANT</span>
                </Link>

                <div className="hidden lg:flex space-x-8">
                    <ul className="flex space-x-6">
                        <NavItem to="/" icon={<FaHome />} label="Home" />
                        <NavItem to="/contact" icon={<FaPhoneAlt />} label="Contact Us" />
                        <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
                        <NavItem to="/menu" icon={<FaUtensils />} label="Our Menu" />
                        <NavItem to="/shop" icon={<FaStore />} label="Our Shop" />
                        <NavItem to="/signout" icon={<FaSignOutAlt />} label="Sign Out" />
                    </ul>
                </div>


                <Link to="/signup" className="btn bg-yellow-500 hover:bg-yellow-400 text-black">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
