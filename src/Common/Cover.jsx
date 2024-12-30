import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="background"
            strength={-200}
        >
            <div className="hero h-[700px] relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="hero-content text-neutral-content text-center relative z-10 flex flex-col items-center justify-center">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="mb-5 text-5xl font-extrabold uppercase text-white">{title}</h1>
                        <p className="mb-5 text-lg text-gray-200">
                            Discover the finest dishes crafted with passion and precision. Join us for an unforgettable culinary journey that tantalizes your taste buds and delights your senses.
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
