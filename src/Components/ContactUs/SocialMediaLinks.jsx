import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
    return (
        <section className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">FOLLOW US</h2>
            <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                    <FaFacebook className="text-4xl" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
                    <FaTwitter className="text-4xl" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition">
                    <FaInstagram className="text-4xl" />
                </a>
            </div>
        </section>
    );
};

export default SocialMediaLinks;
