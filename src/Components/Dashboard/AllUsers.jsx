import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield, } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const AllUsers = () => {
    const axiosSecure = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` }
            });
            return res.data;
        }
    });

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${user?.name} has been promoted to admin.`,
                        icon: 'success',
                        confirmButtonText: 'OK',
                        customClass: { container: 'z-50' }
                    });
                    refetch();
                }
            });
    };

    const handleDeleteUser = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

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
                            {users.map((user) => (
                                <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-800 font-medium">{user.name}</td>
                                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                                    <td className="py-4 px-6 text-center">
                                        {user.role === 'admin'
                                            ? <span className="text-green-500 font-bold">Admin</span>
                                            : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                                            >
                                                <FaUserShield className="inline mr-2" /> Make Admin
                                            </button>}
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="text-red-500 hover:text-red-700 mx-2 tooltip" data-tip="Delete User"
                                        >
                                            <FaTrashAlt size={18} />
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
