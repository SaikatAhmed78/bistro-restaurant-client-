import React from 'react';
import yourImage from '../../assets/home/chef-service.jpg';

const Category2 = () => {
    return (
        <div className="w-11/12 mx-auto p-6 rounded-lg overflow-hidden">
    
            <div
                className="relative bg-cover bg-center h-96 rounded-lg"
                style={{ backgroundImage: `url(${yourImage})` }}
            >
           
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-lg"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 py-4">
                    <h1 className="text-4xl font-extrabold text-shadow-md mb-4">
                        Bistro Boss
                    </h1>
                    <p className="text-lg font-light text-center max-w-md mx-auto text-shadow-md">
                        Discover exquisite dining experiences curated by world-class chefs. Whether you’re in the mood for a lavish feast or a casual bite, we bring the best of the culinary world to your doorstep.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Category2;
