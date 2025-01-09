import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Add more card handling logic here
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment Error-->', error)
        }
        else {
            console.log('Payment Method-->', paymentMethod)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">Checkout</h2>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                    type="submit"
                    disabled={!stripe}
                    className="mt-4 w-full bg-yellow-500 text-white py-4 rounded-md hover:bg-yellow-400 transition duration-300"
                >
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
