import React from 'react';

const Category3 = () => {

    const MenuItem = ({ title, description, price }) => {
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-md font-light mb-4">{description}</p>
                <p className="font-bold text-xl">{price}</p>
            </div>
        );
    };

    return (
        <div className="p-5 flex flex-col items-center justify-center text-gray-800">
            <div className="text-center text-black mb-12">
                <h1 className="text-5xl font-extrabold mb-6">From Our Menu</h1>
                <p className="text-lg font-light max-w-3xl mx-auto">
                    Discover a world of flavors with our carefully crafted dishes, made with the finest ingredients and a touch of culinary passion.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         
                <MenuItem
                    title="ROAST DUCK BREAST"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
                <MenuItem
                    title="ESCALOPE DE VEAU"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
                <MenuItem
                    title="FISH PARMENTIER"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
                <MenuItem
                    title="TUNA NIÇOISE"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
                <MenuItem
                    title="CHICKEN AND WALNUT SALAD"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
                <MenuItem
                    title="ROASTED PORK BELLY"
                    description="Roasted duck breast (served pink) with gratin potato and a girolline cherry sauce"
                    price="$14.5"
                />
            </div>

            <button className="mt-8 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                View Full Menu
            </button>
        </div>
    );
};

export default Category3;
