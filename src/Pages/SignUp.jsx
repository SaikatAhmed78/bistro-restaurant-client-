import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import loginImg from '../assets/others/authentication1.png'
import loginBgImg from '../assets/others/authentication.png'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginBgImg})` }}>
            <div className="bg-white rounded-lg shadow-2xl flex max-w-4xl w-full">
                <div className="w-1/2 p-16">
                    <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2" htmlFor="name">
                                Name
                            </label>
                            <div className="flex items-center border rounded-md p-2">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2" htmlFor="email">
                                Email
                            </label>
                            <div className="flex items-center border rounded-md p-2">
                                <FaEnvelope className="text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border rounded-md p-2">
                                <FaLock className="text-gray-400" />
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <Link to="/login" className="text-sm text-yellow-500 hover:underline">
                            Already have an account? Login
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center p-8 md:block">
                    <img src={loginImg} alt="Sign Up Illustration" className="max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
