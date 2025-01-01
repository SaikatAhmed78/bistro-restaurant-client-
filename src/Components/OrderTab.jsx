import React from 'react';
import CategoryCard from '../Common/CategoryCard';

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item => (
                <CategoryCard key={item._id} item={item} />
            ))}
        </div>
    );
};

export default OrderTab;
