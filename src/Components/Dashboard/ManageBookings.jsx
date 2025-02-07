import React from "react";
import { FaSearch, FaFilter, FaTrashAlt } from "react-icons/fa";

const ManageBookings = () => {
  const bookings = [
    { id: 1, name: "John Doe", date: "2025-02-07", status: "Pending" },
    { id: 2, name: "Jane Smith", date: "2025-02-08", status: "Confirmed" },
    { id: 3, name: "Michael Brown", date: "2025-02-09", status: "Cancelled" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Manage Bookings</h2>
      
      <div className="flex justify-between mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full p-2 border rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
          <FaFilter className="mr-2" /> Filter
        </button>
      </div>
      
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-yellow-400 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{booking.name}</td>
              <td className="p-3">{booking.date}</td>
              <td className={`p-3 font-semibold ${
                booking.status === "Confirmed" ? "text-green-600" : booking.status === "Cancelled" ? "text-red-600" : "text-yellow-600"
              }`}>{booking.status}</td>
              <td className="p-3 text-center">
                <button className="text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
