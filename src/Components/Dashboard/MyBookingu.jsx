import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const MyBookingu = () => {
  const bookings = [
    { id: 1, date: "2025-02-10", status: "Confirmed" },
    { id: 2, date: "2025-02-15", status: "Pending" },
    { id: 3, date: "2025-02-20", status: "Cancelled" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
        <FaCalendarAlt className="text-yellow-500 mr-2" /> My Bookings
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-yellow-400 text-white">
            <th className="p-3 text-left">Booking Date</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3">{booking.date}</td>
              <td className="p-3 flex items-center">
                {booking.status === "Confirmed" && <FaCheckCircle className="text-green-500 mr-2" />}
                {booking.status === "Pending" && <FaCalendarAlt className="text-yellow-500 mr-2" />}
                {booking.status === "Cancelled" && <FaTimesCircle className="text-red-500 mr-2" />}
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingu;
