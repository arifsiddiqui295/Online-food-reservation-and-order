import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/login', { username, password })
        // console.log("response = "+response)
        setUserName("");
        setPassword("");
        navigate("/Premium");
    }
    const [showModal, setShowModal] = useState(true);
    const handleCloseModal = () => {
        setShowModal(false);
        props.onClose(); // Call the onClose function passed from the parent
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="max-w-2xl mx-auto pop-up">
                <div className="bg-white shadow-md border border-gray-200 w-96 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-700 dark:border-gray-700">
                    <form className="space-y-6"
                        onSubmit={loginHandler}
                        method="POST">
                        <div className='flex gap-24'>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white overflow-hidden">
                               Get Access to Premium Benefits
                            </h3>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className=" text-gray-400 hover:text-white focus:outline-none"
                            >
                                {/* Close button icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                            >
                                Your Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                placeholder="username"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300 "
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                required=""
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <div className="text-sm ml-3">
                                    <label
                                        htmlFor="remember"
                                        className="font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
                            >
                                Lost Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?{" "}
                            <a
                                href="/SignUp"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Create account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
