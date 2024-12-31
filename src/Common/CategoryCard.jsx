import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CategoryCard = ({ item }) => {
    return (
        <div className="bg-white p-6 rounded-l hover:shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
                <img src={item?.image} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <div className="text-center">
                    <h3 className="uppercase font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">{item.name}</h3>
                    <p className="text-gray-700 mb-2">{item?.recipe}</p>
                    <p className="text-gray-900 font-bold mb-4">${item?.price}</p>
                </div>
            </div>
            <button className="btn btn-outline  text-black font-bold border-0 border-b-4 rounded-lg shadow-lg flex items-center space-x-2 py-2 px-4 justify-center">
                <FaCartPlus />
                <span>Add to Cart</span>
            </button>

        </div>
    );
};

export default CategoryCard;

