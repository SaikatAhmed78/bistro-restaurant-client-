import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });



    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center">Payment History</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Total Payments: {payments.length}</p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Email</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Category</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Total Price</th>
                            <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment._id}>
                                <td className="py-2 px-4 border-b border-gray-200">{payment.email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{payment.category}</td>
                                <td className="py-2 px-4 border-b border-gray-200">${payment.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{new Date(payment?.status).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
