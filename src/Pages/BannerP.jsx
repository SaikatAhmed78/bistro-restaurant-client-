import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';

// Importing background image from local 'src' folder
import backgroundImage from '../assets/picture/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg';
import profileImage from '../assets/picture/IMG_20240411_191143.jpg';

const BannerP = () => {
    return (
        <div
            className="w-full h-[550px] flex items-center justify-center bg-cover bg-center rounded-lg p-5 relative"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between w-full bg-black bg-opacity-50 rounded-lg p-8 shadow-lg max-w-6xl">
                {/* Text and Icons */}
                <div className="text-center md:text-left flex-1 md:mr-10 mt-6 md:mt-0">
                    {/* Name and Title */}
                    <div className="text-white mb-4">
                        <h1 className="text-5xl font-extrabold mb-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Saikat Ahmed
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-300">MERN Stack Developer</h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-6">
                        Crafting <span className="font-bold text-yellow-300">high-performance</span> and scalable web applications with cutting-edge technologies.
                    </p>

                    {/* Tech Stack Icons */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-6 text-white text-4xl">
                        <FaReact className="hover:text-blue-500 transition-all duration-300" />
                        <SiNextdotjs className="hover:text-gray-300 transition-all duration-300" />
                        <SiTailwindcss className="hover:text-blue-400 transition-all duration-300" />
                        <FaNodeJs className="hover:text-green-500 transition-all duration-300" />
                        <SiMongodb className="hover:text-green-400 transition-all duration-300" />
                        <SiFirebase className="hover:text-yellow-500 transition-all duration-300" />
                        <SiTypescript className="hover:text-blue-600 transition-all duration-300" />
                    </div>
                </div>

                {/* Profile Picture with Border */}
                <div className="relative mb-6 md:mb-0">
                    <img
                        className="w-[150px] h-[150px] rounded-full object-cover border-4 border-blue-500 shadow-lg md:mr-6"
                        src={profileImage}
                        alt="Saikat Ahmed"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerP;
