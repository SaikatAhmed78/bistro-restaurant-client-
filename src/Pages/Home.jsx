import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Category2 from '../Components/Category2';
import Category3 from '../Components/Category3';
import Category4 from '../Components/Category4';
import Featured from '../Components/Featured';
import Reviews from '../Components/Reviews';

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

           <div className='w-11/12 mx-auto p-5'>
           <Category4></Category4>
           </div>

           <div className='w-11/12 mx-auto p-5'>
           <Featured></Featured>
           </div>
           
           <div className='w-11/12 mx-auto p-5'>
           <Reviews></Reviews>
           </div>

        </div>
    );
};

export default Home;