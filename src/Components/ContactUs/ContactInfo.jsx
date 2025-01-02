import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <section className="text-center py-16 bg-white text-gray-900">
            <h2 className="text-5xl font-extrabold mb-10">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center border border-gray-300 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <FaPhoneAlt className="text-blue-500 text-6xl mb-6" />
                    <h3 className="text-3xl font-semibold mb-4">Call Us</h3>
                    <p className="text-xl">+88 013033-90718</p>
                </div>
                <div className="flex flex-col items-center border border-gray-300 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <FaMapMarkerAlt className="text-red-500 text-6xl mb-6" />
                    <h3 className="text-3xl font-semibold mb-4">Visit Us</h3>
                    <p className="text-xl">Shapla Street, Rangpure</p>
                </div>
                <div className="flex flex-col items-center border border-gray-300 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <FaEnvelope className="text-green-500 text-6xl mb-6" />
                    <h3 className="text-3xl font-semibold mb-4">Working Hours</h3>
                    <p className="text-xl">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-xl">Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
