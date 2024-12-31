import React from 'react';
import MenuItem from '../Common/MenuItem';
import CategoryBanner from '../Common/CategoryBanner';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <CategoryBanner img={img} title={title} description="Discover our exquisite culinary delights" />}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                {items.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>

            <div className="flex justify-center my-5 mb-5">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline text-black font-bold border-0 border-b-4 rounded-lg shadow-lg flex items-center space-x-2">
                        <span>View Full Menu</span>
                        <FaChevronRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
