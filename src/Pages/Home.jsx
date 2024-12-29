import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Category2 from '../Components/Category2';
import Category3 from '../Components/Category3';

const Home = () => {
    return (
        <div>
           <Banner></Banner>

           <div className='w-11/12 mx-auto mt-10 p-5'>
           <Category></Category>
           </div>

           <div className='w-11/12 mx-auto mt-5 p-5'>
           <Category2></Category2>
           </div>

           <div className='w-11/12 mx-auto p-5'>
           <Category3></Category3>
           </div>
           
        </div>
    );
};

export default Home;