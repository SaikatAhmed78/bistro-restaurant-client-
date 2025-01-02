import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/menu-items', data);
            if (response.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Item has been added successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add item. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-center mb-8">Add an Item</h2>
                <p className="text-center text-lg mb-8">---What's new?---</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Recipe name is required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:border-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-bold mb-2">Category</label>
                            <select
                                {...register('category', { required: 'Category is required' })}
                                className={`w-full p-4 border rounded-md focus:outline-none focus:border-yellow-500 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                            >
                                <option value="">Select a category</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="main">Main Course</option>
                                <option value="dessert">Dessert</option>
                                <option value="beverage">Beverage</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('price', { required: 'Price is required', min: 0 })}
                                className={`w-full p-4 border rounded-md focus:outline-none focus:border-yellow-500 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Details</label>
                        <textarea
                            {...register('details', { required: 'Recipe details are required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:border-yellow-500 ${errors.details ? 'border-red-500' : 'border-gray-300'}`}
                            rows="4"
                        ></textarea>
                        {errors.details && <p className="text-red-500 text-sm">{errors.details.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
                        <input
                            type="file"
                            {...register('image', { required: 'Image is required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:border-yellow-500 ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-4 rounded-md hover:bg-yellow-400 transition duration-300"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
