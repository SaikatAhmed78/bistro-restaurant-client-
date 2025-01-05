import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit, FaUserShield, FaUser } from 'react-icons/fa';
import useAxios from '../../Hooks/useAxios';

const AllUsers = () => {

    const axiosSecure = useAxios();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    return (
        <div className="container mx-auto py-10 px-6">
            <div className="bg-white shadow-2xl rounded-lg p-8">
                <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">User Management</h2>
                <p className="text-center text-gray-700 mb-6">Total Users: <span className="font-bold text-lg">{users.length}</span></p>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
                        <thead>
                            <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-md leading-normal">
                                <th className="py-4 px-6 text-left">Name</th>
                                <th className="py-4 px-6 text-left">Email</th>
                                <th className="py-4 px-6 text-left">Role</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-800 font-medium">{user.name}</td>
                                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                                    <td className="py-4 px-6 text-center">
                                        {user.role === 'Admin' ? (
                                            <FaUserShield className="text-red-500 mx-auto cursor-pointer hover:text-red-700" size={20} />
                                        ) : (
                                            <FaUser className="text-blue-500 mx-auto cursor-pointer hover:text-blue-700" size={20} />
                                        )}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <button className="text-red-500 hover:text-red-700 mx-2 tooltip" data-tip="Delete User">
                                            <FaTrashAlt size={18} />
                                        </button>
                                        <button className="text-blue-500 hover:text-blue-700 mx-2 tooltip" data-tip="Edit User">
                                            <FaUserEdit size={18} />
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

export default AllUsers;