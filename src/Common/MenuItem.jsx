import React from 'react';
import { FaRegStar } from 'react-icons/fa';


const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item || {};

    return (
        <div className="flex items-center space-x-4 p-4 rounded-lg shadow-lg bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
                src={image} 
                style={{ borderRadius: '0 200px 200px 200px' }} 
                className="w-[120px] h-[120px] object-cover" 
            />
            <div className="flex-1">
                <h3 className="uppercase font-bold text-lg mb-1 text-yellow-600">------{name}</h3>
                <p className="text-gray-700">{recipe}</p>
            </div>
            <p className="text-xl font-bold text-yellow-600">{price}</p>
            <FaRegStar className="text-yellow-500" />
            
    
        </div>


        
    );
};

export default MenuItem;
