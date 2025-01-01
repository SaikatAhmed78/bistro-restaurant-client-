import React from 'react';

const ContactForm = () => {
    return (
        <section className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4">CONTACT FORM</h2>
            <form className="max-w-lg mx-auto space-y-6">
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-500"
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-500"
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Write your message here"
                        className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center items-center space-x-2">
                    <input type="checkbox" id="notRobot" className="mr-2" required />
                    <label htmlFor="notRobot">I'm not a robot</label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
