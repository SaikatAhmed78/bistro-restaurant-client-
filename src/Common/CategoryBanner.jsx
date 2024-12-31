import React from 'react';

const CategoryBanner = ({ img, title, description }) => {
    return (
        <div className="w-11/12 mx-auto p-6 rounded-lg overflow-hidden">
            <div
                className="relative bg-cover bg-center h-96 rounded-lg"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 py-4">
                    <h1 className="text-4xl font-extrabold text-shadow-md mb-4">{title}</h1>
                    <p className="text-lg font-light text-center max-w-md mx-auto text-shadow-md">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;
