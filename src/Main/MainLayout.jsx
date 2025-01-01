import React from 'react';
import Navbar from '../Common/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Common/Footer';

const MainLayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            {
                noHeaderFooter || <div className='mx-auto'>
                    <Navbar />
                </div>
            }

            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>

            {
                noHeaderFooter || <Footer />
            }
        </div>
    );
};

export default MainLayout;
