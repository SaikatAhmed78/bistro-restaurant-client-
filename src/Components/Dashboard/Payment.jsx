import React from 'react';
import SectionTitle from '../../Common/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY_PK);

const Payment = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col items-center pt-6 px-4 md:px-6">
            <SectionTitle heading="PAYMENT" subHeading="Please Pay To Eat"></SectionTitle>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 mt-6">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
