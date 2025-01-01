import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaUser, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';
import { GrValidate } from 'react-icons/gr';
import loginImg from '../assets/others/authentication1.png';
import loginBgImg from '../assets/others/authentication.png';
import { AuthContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    timer: 2000,
                    showConfirmButton: false
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message
                });
            });
    };

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    return (
      <>
      <Helmet>
        <title>Bistro Boss - Login</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-cover bg-center px-4 md:px-0" style={{ backgroundImage: `url(${loginBgImg})` }}>
            <div className="bg-white rounded-lg shadow-2xl flex flex-col md:flex-row max-w-4xl w-full">
                <div className="hidden md:flex md:w-1/2 flex-col justify-center items-center p-8">
                    <img src={loginImg} alt="Login Illustration" className="w-80 h-80 object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-16">
                    <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                            <div className="flex items-center border rounded-md p-2">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Type here"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="flex items-center border rounded-md p-2">
                                <GrValidate className="text-gray-400" />
                                <input
                                    type="text"
                                    id="captcha"
                                    name="captcha"
                                    ref={captchaRef}
                                    onBlur={handleValidateCaptcha}
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Type the Captcha"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 mb-2" htmlFor="password">Password</label>
                            <div className="flex items-center border rounded-md p-2">
                                <FaLock className="text-gray-400" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full p-2 ml-2 focus:outline-none"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={disabled || loading}
                            className={`w-full py-2 rounded-md transition duration-300 ${disabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400 text-white'}`}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <Link to="/signUp" className="text-sm text-yellow-500 hover:underline">
                            New here? Create a New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Login;
