import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../Hooks/useAxios';
import { FaDollarSign, FaUsers, FaBox, FaShoppingCart } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Utility Functions
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Card = ({ icon: Icon, title, value, bgColor }) => (
    <div className={`bg-${bgColor}-500 text-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-3 transform transition-transform hover:scale-105`}>
        <Icon />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm opacity-75">Updated Just Now</p>
    </div>
);

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data: stats = {}, isError: statsError, isLoading: statsLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state');
            return res.data;
        },
    });

    const { data: chartData = [], isError: chartError, isLoading: chartLoading } = useQuery({
        queryKey: ['/order-state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-state');
            return res.data;
        }
    });

    if (statsLoading || chartLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (statsError || chartError) {
        return <div className="text-center text-red-500 mt-10">Error loading data</div>;
    }

    const piechartData = chartData.map(data => {
        return { name: data.category, value: data.revenue };
    });

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
                Hi, Welcome {user?.displayName || 'Back'}!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <Card icon={FaDollarSign} title="Revenue" value={stats.revenue || 0} bgColor="blue" />
                <Card icon={FaUsers} title="Users" value={stats.customers || 0} bgColor="green" />
                <Card icon={FaBox} title="Products" value={stats.menuItems || 0} bgColor="orange" />
                <Card icon={FaShoppingCart} title="Orders" value={stats.orders || 0} bgColor="red" />
            </div>

            <div className="flex flex-wrap justify-around my-8 gap-6">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={piechartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {piechartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
