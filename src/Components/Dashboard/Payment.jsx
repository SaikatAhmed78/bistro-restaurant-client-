import React from 'react';
import SectionTitle from '../../Common/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>

            <SectionTitle heading="PAYMENT" subHeading="Please Pay To Eat"></SectionTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;