import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';

const Home = () => {
    return (
        <div>
           <Banner></Banner>

           <div className='w-11/12 mx-auto mt-10 p-5'>
           <Category></Category>
           </div>
        </div>
    );
};

export default Home;