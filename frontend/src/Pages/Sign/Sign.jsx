import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Premium from '../Premium/Premium'
const Sign = () => {
    const navigate=useNavigate()
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler= async (e)=>{
        e.preventDefault();
        const response =await axios.post('http://localhost:3000/login',{username,password})
        // console.log("response = "+response)
        setUserName("");
        setPassword("");
        navigate("/Premium");
    }
    return (
        <div>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2  ">
                    <h1 className="text-2xl font-semibold mb-4 overflow-hidden">Login</h1>
                    <form 
                    onSubmit={loginHandler}
                    method="POST">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">Username</label>
                            <input type="text"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            id="username"  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                        </div>
                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                    <div className="mt-6 text-blue-500 text-center">
                        <a href="/SignUp" className="hover:underline">Sign up Here</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Sign