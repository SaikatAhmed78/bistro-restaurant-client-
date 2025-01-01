import React from 'react';
import SectionTitle from '../../Common/SectionTitle'; 
import { FaCartPlus } from 'react-icons/fa';
import caesarSaladImage from '../../assets/home/featured.jpg';

const Category4 = () => {

    const MenuItem = ({ title, description, image }) => {
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img src={image}  className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <div className="text-center">
                    <h3 className="uppercase font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <button className="mt-4 py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300">
                        <FaCartPlus />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="p-5 flex flex-col items-center justify-center text-gray-800">
            <SectionTitle
                subHeading="---Should Try---"
                heading="CHEF RECOMMENDS"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <MenuItem
                    title="Caesar Salad"
                    description="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    image={caesarSaladImage}
                />
                <MenuItem
                    title="Caesar Salad"
                    description="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    image={caesarSaladImage}
                />
                <MenuItem
                    title="Caesar Salad"
                    description="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."
                    image={caesarSaladImage}
                />
            </div>
        </div>
    );
};

export default Category4;
