import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorGif from '../../src/assets/error/404.gif';

const ErrorElement = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${errorGif})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-6 md:p-12">
        <h1 className="text-9xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoBack}
          className="px-8 py-3 bg-yellow-500 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 inline-flex items-center"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorElement;
