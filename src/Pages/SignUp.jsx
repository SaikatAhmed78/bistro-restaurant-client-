import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaImage } from 'react-icons/fa';
import loginImg from '../assets/others/authentication1.png';
import loginBgImg from '../assets/others/authentication.png';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Common/Social Login/SocialLogin";

const SignUp = () => {
    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        createNewUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added')
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'User profile updated successfully',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    });
                                    navigate('/');
                                }
                            })
                    })

            })

            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss - SignUp</title>
            </Helmet>

            <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginBgImg})` }}>
                <div className="bg-white rounded-lg shadow-2xl flex max-w-4xl w-full">
                    <div className="w-1/2 p-16">
                        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label className="block text-gray-600 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <div className="flex items-center border rounded-md p-2">
                                    <FaUser className="text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name", { required: true })}
                                        className="w-full p-2 ml-2 focus:outline-none"
                                        placeholder="Enter your name"
                                        name='name'
                                    />
                                </div>
                                {errors.name && <span className="text-red-700">Name is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <div className="flex items-center border rounded-md p-2">
                                    <FaEnvelope className="text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email", { required: true })}
                                        className="w-full p-2 ml-2 focus:outline-none"
                                        placeholder="Enter your email"
                                        name='email'
                                    />
                                </div>
                                {errors.email && <span className="text-red-700">Email is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 mb-2" htmlFor="photoURL">
                                    Photo URL
                                </label>
                                <div className="flex items-center border rounded-md p-2">
                                    <FaImage className="text-gray-400" />
                                    <input
                                        type="text"
                                        id="photoURL"
                                        {...register("photoURL", { required: true })}
                                        className="w-full p-2 ml-2 focus:outline-none"
                                        placeholder="Enter photo URL"
                                        name='photoURL'
                                    />
                                </div>
                                {errors.photoURL && <span className="text-red-700">Photo URL is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-600 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="flex items-center border rounded-md p-2">
                                    <FaLock className="text-gray-400" />
                                    <input
                                        type="password"
                                        id="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 10,
                                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
                                        })}
                                        className="w-full p-2 ml-2 focus:outline-none"
                                        placeholder="Enter your password"
                                        name='password'
                                        required
                                    />
                                </div>
                                {errors.password?.type === 'required' && <span className="text-red-700">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-700">Password must be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-700">Password cannot exceed 10 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-700">Password must include uppercase, lowercase, number, and special character</span>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300"
                            >
                                Sign Up
                            </button>
                        </form>

                        <div className='mt-4 flex justify-center items-center'>
                            <SocialLogin></SocialLogin>
                        </div>

                        <div className="text-center mt-6">
                            <Link to="/login" className="text-sm text-yellow-500 hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col justify-center items-center p-8 md:block">
                        <img src={loginImg} alt="Sign Up Illustration" className="max-w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
