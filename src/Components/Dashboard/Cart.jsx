import React from 'react';
import useCart from '../../Hooks/useCart';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxios();


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

                axiosSecure.delete(`/carts/${itemId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-6 px-4 md:px-6">
            <p className="text-lg text-gray-700 mb-4 text-center">---My Cart---</p>
            <h2 className="text-3xl font-bold mb-6 text-center">WANNA ADD MORE?</h2>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <p className="text-lg font-semibold">Total items: {cart.length}</p>
                    <p className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>

                    {cart.length > 0 ? (
                        <Link to="/dashboard/payment">
                            <button
                                className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-400 transition duration-300 mt-2 md:mt-0"
                            >
                                Pay
                            </button>
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="bg-gray-400 text-white py-2 px-6 rounded-md mt-2 md:mt-0 cursor-not-allowed"
                        >
                            Pay
                        </button>
                    )}

                    {/* remove */}

                    <Link to="/dashboard/payment">
                        <button
                            className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-400 transition duration-300 mt-2 md:mt-0"
                        >
                            Pay
                        </button>
                    </Link>

                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead>
                            <tr>
                                <th className="px-2 md:px-4 py-2">Image</th>
                                <th className="px-2 md:px-4 py-2">Name</th>
                                <th className="px-2 md:px-4 py-2">Price</th>
                                <th className="px-2 md:px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item._id} className="border-t">
                                    <td className="px-2 md:px-4 py-2">
                                        <img src={item.image} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded" />
                                    </td>
                                    <td className="px-2 md:px-4 py-2">{item.name}</td>
                                    <td className="px-2 md:px-4 py-2">${item.price.toFixed(2)}</td>
                                    <td className="px-2 md:px-4 py-2 flex space-x-2">

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

export default Cart;
