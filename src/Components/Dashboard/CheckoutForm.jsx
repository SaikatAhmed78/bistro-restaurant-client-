import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useCart from '../../Hooks/useCart';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');



    const navigate = useNavigate();

    const axiosSecure = useAxios();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/creat-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            setError(paymentError.message);
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {

            Swal.fire({
                icon: 'error',
                title: 'Payment Error',
                text: confirmError.message,
                customClass: {
                    container: 'z-50',
                },
            });
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            Swal.fire({
                icon: 'success',
                title: 'Payment Successful!',
                text: `Your payment of $${totalPrice.toFixed(2)} was successful. Transaction ID: ${paymentIntent.id}`,
                customClass: {
                    container: 'z-50',
                },
            });
            setTransactionId(paymentIntent.id);

            const paymentDetails = {
                email: user.email,
                price: totalPrice,
                date: new Date(),
                transactionId: paymentIntent.id,
                cartIds: cart.map((item) => item._id),
                menuItemIds: cart.map((item) => item.menuId),
                status: 'pending',
            };

            const res = await axiosSecure.post('/payments', paymentDetails);

            if (res.data?.paymentResult?.insertedId) {
                refetch();
                navigate('/dashboard/paymentHistory')
            }
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
                    disabled={!stripe || !clientSecret}
                    className="mt-4 w-full bg-yellow-500 text-white py-4 rounded-md hover:bg-yellow-400 transition duration-300"
                >
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId && (
                    <p className="text-green-600">Your Transaction Id: {transactionId}</p>
                )}
            </div>
        </form>
    );
};

export default CheckoutForm;
