import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaPhoneAlt, FaTachometerAlt, FaUtensils, FaStore, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import profileImg from '../assets/others/profile.png';
import useCart from '../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut().then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Logged Out',
                text: 'You have been successfully logged out.',
                timer: 2000,
                showConfirmButton: false
            });
            navigate('/login');
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Logout Failed',
                text: error.message
            });
        });
    };

    const NavItem = ({ to, icon, label }) => (
        <li className="text-lg">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md transition-all duration-300 ${isActive ? "text-yellow-300 bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-700"
                    }`
                }
            >
                {icon}
                <span>{label}</span>
            </NavLink>
        </li>
    );

    return (
        <nav className="bg-black bg-opacity-80 fixed w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">

                <div className="lg:hidden">
                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="#fff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 p-4 space-y-3 shadow bg-gray-900 rounded-md w-52"
                        >
                            <NavItem to="/" icon={<FaHome />} label="Home" />
                            <NavItem to="/contactUs" icon={<FaPhoneAlt />} label="Contact Us" />
                            <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
                            <NavItem to="/menu" icon={<FaUtensils />} label="Our Menu" />
                            <NavItem to="/shop/salad" icon={<FaStore />} label="Our Shop" />

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
                        <NavItem to="/contactUs" icon={<FaPhoneAlt />} label="Contact Us" />
                        <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
                        <NavItem to="/menu" icon={<FaUtensils />} label="Our Menu" />
                        <NavItem to="/shop/salad" icon={<FaStore />} label="Our Shop" />

                        <Link to="/dashboard/my-cart">
                            <li className="flex items-center space-x-2">
                                <FaShoppingCart className="w-5 h-5 text-white" />
                                <div className="badge badge-secondary">+{cart.length}</div>
                            </li>
                        </Link>
                    </ul>
                </div>

                {user ? (
                    <div className="flex items-center space-x-4">
                        <img
                            src={user.photoURL || profileImg}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-white">{user.displayName || 'User'}</span>
                        <button
                            onClick={handleSignOut}
                            className="btn bg-yellow-500 hover:bg-yellow-400 text-black"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="btn bg-yellow-500 hover:bg-yellow-400 text-black">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
