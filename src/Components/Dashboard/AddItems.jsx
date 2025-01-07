import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaUtensilSpoon } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxios from '../../Hooks/useAxios';

// HOSTING KEY & API
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const imageFile = new FormData();
        imageFile.append('image', data.image[0]);

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

            const menuRes = await axiosSecure.post('/menu', menuItem);

            if (menuRes.data.insertedId) {
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
            console.log(menuRes.data);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
            <div className="w-full max-w-3xl p-10 bg-white rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Add an Item</h2>
                <p className="text-center text-lg text-gray-600 mb-8">--- What's new? ---</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Recipe name is required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-bold mb-2">Category</label>
                            <select
                                {...register('category', { required: 'Category is required' })}
                                className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                            >
                                <option value="">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 font-bold mb-2">Price</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('price', { required: 'Price is required', min: 0 })}
                                className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-2">{errors.price.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Recipe Details</label>
                        <textarea
                            {...register('recipe', { required: 'Recipe details are required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.recipe ? 'border-red-500' : 'border-gray-300'}`}
                            rows="4"
                        ></textarea>
                        {errors.recipe && <p className="text-red-500 text-sm mt-2">{errors.recipe.message}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
                        <input
                            type="file"
                            {...register('image', { required: 'Image is required' })}
                            className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-4 rounded-md hover:bg-yellow-400 transition duration-300 flex items-center justify-center"
                    >
                        Add Item
                        <FaUtensilSpoon className="ml-2" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
