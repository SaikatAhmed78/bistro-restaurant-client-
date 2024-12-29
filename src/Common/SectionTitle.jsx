import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-8">
            <p className="text-yellow-500 italic mb-2">{subHeading}</p>
            <h3 className="text-4xl font-bold text-gray-900 uppercase border-b-2 border-yellow-500 pb-2">
                {heading}
            </h3>
        </div>
    );
};

export default SectionTitle;
