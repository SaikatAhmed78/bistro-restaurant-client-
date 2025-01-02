import React from 'react';

const ContactForm = () => {
    return (
        <section className="text-center py-16 bg-gray-50 text-gray-900">
            <h2 className="text-5xl font-extrabold mb-12">Get in Touch</h2>
            <form className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-2xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="6"
                    required
                ></textarea>
                <div className="flex items-center justify-start space-x-4">
                    <input type="checkbox" id="robotCheck" className="w-5 h-5" required />
                    <label htmlFor="robotCheck" className="text-lg">I am not a robot</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white text-xl py-4 rounded-lg hover:bg-blue-500 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
