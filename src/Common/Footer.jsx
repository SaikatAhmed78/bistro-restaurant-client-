import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                <div className="bg-[#1f2937] py-12 px-6 text-center">
                    <h2 className="text-lg font-semibold">CONTACT US</h2>
                    <p className="mt-4 text-gray-400">123 ABS Street, Unit 21, Bangladesh</p>
                    <p className="text-gray-400">+88 0123456789</p>
                    <p className="text-gray-400">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-gray-400">Sat - Sun: 10:00 - 21:00</p>
                </div>

                <div className="bg-[#111827] py-12 px-6 text-center">
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    <p className="mt-4 text-gray-400">Join us on social media</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white text-2xl">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-black text-center py-6">
                <p className="text-gray-400">Copyright © {currentYear} BISTRO BOSS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
