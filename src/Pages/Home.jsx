import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Category2 from '../Components/Category2';
import Category3 from '../Components/Category3';
import Category4 from '../Components/Category4';
import Featured from '../Components/Featured';
import Reviews from '../Components/Reviews';
import { Helmet } from 'react-helmet-async';

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












