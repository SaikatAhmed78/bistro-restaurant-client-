import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Common/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import Category3 from '../Components/Category3';
import Category2 from '../Components/Category2';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Our Menu</title>
            </Helmet>

            <Cover  img={menuImg} title="our menu"></Cover>
           
           <div className='w-11/12 mx-auto p-5'>

           <Category3></Category3>

           <Category2></Category2>
           </div>
        </div>
    );
};

export default Menu;