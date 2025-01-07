import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import dashErrImg from '../../assets/error/404.gif';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="relative flex items-center justify-center h-screen bg-indigo-600">
            <img src={dashErrImg} alt="Error 404" className="absolute inset-0 object-cover w-full h-full opacity-50" />
            <div className="relative z-10 text-center">
                <h1 className="text-9xl font-extrabold text-white mb-8">404</h1>
                <p className="text-2xl text-white mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={goHome}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded inline-flex items-center"
                    >
                        <FaHome className="mr-2" />
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
