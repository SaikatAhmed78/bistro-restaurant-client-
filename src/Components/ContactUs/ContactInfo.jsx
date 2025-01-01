import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <section className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">OUR LOCATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <FaPhoneAlt className="text-yellow-500 text-4xl mb-2" />
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p>+88 01750 00 00 00</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-yellow-500 text-4xl mb-2" />
                    <h3 className="text-xl font-semibold">Address</h3>
                    <p>123 Street, City, Country</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaEnvelope className="text-yellow-500 text-4xl mb-2" />
                    <h3 className="text-xl font-semibold">Working Hours</h3>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
