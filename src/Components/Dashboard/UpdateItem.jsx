import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Common/SectionTitle';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

// HOSTING KEY & API
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();

    const item = useLoaderData();
    const { name, category, recipe, price, _id } = item;

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }


        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Menu item added successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        container: 'z-50'
                    }
                });

            }
        }
    };


    return (
        <div className="flex flex-col items-center px-4 md:px-6">
            <SectionTitle heading="UPDATE ITEM" subHeading="Refresh"></SectionTitle>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Name</label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register('name', { required: 'Recipe name is required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            disabled
                        />

                    </div>

                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <label className="block text-gray-800 font-semibold mb-2">Category</label>
                            <select
                                defaultValue={category}
                                {...register('category')}
                                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500"
                            >

                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                defaultValue={price}
                                step="0.01"
                                {...register('price', { required: 'Price is required', min: 0 })}
                                className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}

                            />

                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Details</label>
                        <textarea
                            {...register('recipe', { required: 'Recipe details are required' })}
                            defaultValue={recipe}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.recipe ? 'border-red-500' : 'border-gray-300'}`}
                            rows="4"

                        ></textarea>

                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
                        <input
                            type="file"
                            {...register('image')}
                            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"

                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-4 rounded-md hover:bg-yellow-400 transition duration-300"

                    >
                        Update Recipe Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
