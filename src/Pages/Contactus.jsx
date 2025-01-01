import React from 'react';
import contactImg from '../assets/contact/banner.jpg';
import Cover from '../Common/Cover';
import { Helmet } from 'react-helmet-async';
import ContactInfo from '../Components/ContactUs/ContactInfo';
import ContactForm from '../Components/ContactUs/ContactForm';
import SocialMediaLinks from '../Components/ContactUs/SocialMediaLinks';


const Contactus = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Contact</title>
            </Helmet>

            <Cover img={contactImg} title="CONTACT US" />

            <div className='w-11/12 mx-auto mt-5 p-5'>
                <ContactInfo></ContactInfo> 
                <ContactForm />
                <SocialMediaLinks />
    
            </div>
        </div>
    );
};

export default Contactus;
