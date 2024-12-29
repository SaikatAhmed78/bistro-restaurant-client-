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
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${errorGif})` }}
    >
      <button
        onClick={handleGoBack}
        className="px-8 py-3 bg-yellow-500 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorElement;
