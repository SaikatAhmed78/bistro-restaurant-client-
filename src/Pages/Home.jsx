import React from 'react';
import Category4 from '../Components/Home/Category4';
import Reviews from '../Components/Home/Reviews';
import { Helmet } from 'react-helmet-async';
import Category from '../Components/Home/Category';
import Category2 from '../Components/Home/Category2';
import Category3 from '../Components/Home/Category3';
import Featured from '../Components/Home/Featured';
import Banner from '../Components/Home/Banner';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss - Home</title>
            </Helmet>

            <Banner></Banner>

            <div className='w-11/12 mx-auto mt-5 p-5'>
                <Category></Category>
                <Category2></Category2>
                <Category3></Category3>
                <Category4></Category4>
                <Featured></Featured>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;












