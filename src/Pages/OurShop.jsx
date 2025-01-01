import React, { useState } from 'react';
import shopCoverImg from '../assets/shop/banner2.jpg';
import Cover from '../Common/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OrderTab from '../Components/OrderTab';

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'drinks'];
    const [menu] = useMenu();
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
    
    const categorizedItems = {
        'Salad': menu.filter(item => item.category === 'salad'),
        'Pizza': menu.filter(item => item.category === 'pizza'),
        'Soup': menu.filter(item => item.category === 'soup'),
        'Dessert': menu.filter(item => item.category === 'dessert'),
        'Drinks': menu.filter(item => item.category === 'drinks')
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Our Shop</title>
            </Helmet>

            <Cover img={shopCoverImg} title="OUR SHOP" />

            <div className="w-11/12 mx-auto mt-10 p-5">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center space-x-4 mb-8">
                        {Object.keys(categorizedItems).map((category, index) => (
                            <Tab
                                key={index}
                                className={`px-4 py-2 font-semibold text-gray-800 rounded-lg shadow-md cursor-pointer focus:outline-none ${
                                    tabIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            >
                                {category}
                            </Tab>
                        ))}
                    </TabList>

                    {Object.keys(categorizedItems).map((category, index) => (
                        <TabPanel key={index}>
                            <OrderTab items={categorizedItems[category]} />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;
