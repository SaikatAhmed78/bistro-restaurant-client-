import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
        <FaStar className="text-yellow-500 mr-2" /> Add Your Review
      </h2>
      {submitted ? (
        <div className="text-center">
          <p className="text-green-600 font-semibold text-lg">Thank you for your feedback! 🎉</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">Share your experience with us.</p>
          <div className="flex space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-gray-400 cursor-pointer hover:text-yellow-500 transition duration-300" />
            ))}
          </div>
          <textarea
            className="w-full h-40 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Write your detailed review here..."
          ></textarea>
          <button
            onClick={handleSubmit}
            className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition font-semibold"
          >
            Submit Review
          </button>
        </>
      )}
    </div>
  );
};

export default AddReview;
