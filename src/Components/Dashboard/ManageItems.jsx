import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';

const ManageItems = () => {
    const axiosSecure = useAxios();

    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['manageItems'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu');
            return res.data;
        }
    });

    const handleRemoveItem = (itemId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${itemId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The item has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-6 px-4 md:px-6">
            <p className="text-center text-lg text-yellow-500 mb-8">--- Hurry Up! ---</p>
            <h2 className="text-3xl font-bold mb-2 text-center">MANAGE ALL ITEMS</h2>
            <p className="text-xl text-gray-700 mb-6 text-center">Total Items: {menu.length}</p>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead>
                            <tr>
                                <th className="px-2 md:px-4 py-2">Image</th>
                                <th className="px-2 md:px-4 py-2">Name</th>
                                <th className="px-2 md:px-4 py-2">Category</th>
                                <th className="px-2 md:px-4 py-2">Price</th>
                                <th className="px-2 md:px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map(item => (
                                <tr key={item._id} className="border-t">
                                    <td className="px-2 md:px-4 py-2">
                                        <img src={item.image} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded" />
                                    </td>
                                    <td className="px-2 md:px-4 py-2">{item.name}</td>
                                    <td className="px-2 md:px-4 py-2">{item.category}</td>
                                    <td className="px-2 md:px-4 py-2">${item.price.toFixed(2)}</td>
                                    <td className="px-2 md:px-4 py-2 flex space-x-2">
                                        <Link to={`/dashboard/update-item/${item._id}`}>
                                            <button
                                                className="text-blue-500 hover:text-blue-700 transition duration-300"
                                            >
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleRemoveItem(item._id)}
                                            className="text-red-500 hover:text-red-700 transition duration-300"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
