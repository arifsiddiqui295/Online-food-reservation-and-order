import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar';

const Premium = () => {
    const amount = 5000;
    const currency = 'INR';
    const receiptId = "qwsaq1"
    const paymentHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/order", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("response = ",response);
        const order = await response.json();
        console.log("order = ", order);
        var options = {
            "key": "rzp_test_D9EPYseECtZHZj", 
            amount, 
            currency,
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, 
            "handler": async function (response) {
              const body={
                ...response,
              };
              const validateRes = await fetch(
                "http://localhost:3000/order/validate",
                {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const jsonRes = await validateRes.json();
              console.log("jsonres = ",jsonRes);
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }

    return (
        <div style={{ backgroundColor: '#F3F4F6' }} className="h-screen ">
            <Navbar />
            <main className="max-w-6xl mx-auto px-8 overflow-y-hidden ">
                <div className="max-w-md mx-auto mb-4 text-center overflow-hidden">
                    <h1 className="text-4xl font-semibold mb-6 lg:text-5xl overflow-hidden">
                        <span className="text-indigo-600">Flexible</span> Plans
                    </h1>
                    <p className="text-xl text-gray-500 font-medium overflow-hidden">
                        Choose a plan that works best for you and your team.
                    </p>
                </div>
                <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                    <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                        <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                            <img
                                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                                alt=""
                                className="rounded-3xl w-20 h-20"
                            />
                            <div className="ml-5 overflow-hidden ">
                                <span className="block text-2xl font-semibold overflow-hidden">Basic</span>
                                <span>
                                    <span className="font-medium text-gray-500 text-xl align-top ">
                                        $
                                    </span>
                                    <span className="text-3xl font-bold ">10 </span>
                                </span>
                                <span className="text-gray-500 font-medium " >/ user</span>
                            </div>
                        </div>
                        <ul className="mb-7 font-medium text-gray-500 ">
                            <li className="flex text-lg mb-2 ">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    Get started with <span className="text-black">messaging</span>
                                </span>
                            </li>
                            <li className="flex text-lg mb-2">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    Flexible <span className="text-black">team meetings</span>
                                </span>
                            </li>
                            <li className="flex text-lg">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    <span className="text-black">5 TB</span> cloud storage
                                </span>
                            </li>
                        </ul>
                        <button onClick={paymentHandler}
                            className=" App-link flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-20 text-center text-white text-xl"
                        >
                            Choose Plan
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                className="ml-2"
                            />
                        </button>
                    </div>
                    <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                        <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
                            <img
                                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                                alt=""
                                className="rounded-3xl w-20 h-20"
                            />
                            <div className="ml-5 overflow-hidden">
                                <span className="block text-3xl font-semibold text-white overflow-hidden">
                                    Startup
                                </span>
                                <span>
                                    <span className="font-medium text-xl align-top">$ </span>
                                    <span className="text-3xl font-bold text-white">24 </span>
                                </span>
                                <span className="font-medium">/ user</span>
                            </div>
                        </div>
                        <ul className="mb-10 font-medium text-xl">
                            <li className="flex mb-6">
                                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                                <span className="ml-3 overflow-hidden">
                                    All features in <span className="text-white">Basic</span>
                                </span>
                            </li>
                            <li className="flex mb-6">
                                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                                <span className="ml-3 overflow-hidden">
                                    Flexible <span className="text-white ">call scheduling</span>
                                </span>
                            </li>
                            <li className="flex ">
                                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                                <span className="ml-3 overflow-hidden">
                                    <span className="text-white ">15 TB</span> cloud storage
                                </span>
                            </li>
                        </ul>
                        <button onClick={paymentHandler}
                            className=" App-link flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-20 text-center text-white text-xl"
                        >
                            Choose Plan
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                className="ml-2"
                            />
                        </button>
                    </div>
                    <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                        <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                            <img
                                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                                alt=""
                                className="rounded-3xl w-20 h-20"
                            />
                            <div className="ml-5 overflow-hidden">
                                <span className="block text-2xl font-semibold overflow-hidden">Enterprise</span>
                                <span>
                                    <span className="font-medium text-gray-500 text-xl align-top">
                                        $
                                    </span>
                                    <span className="text-3xl font-bold">35</span>
                                </span>
                                <span className="text-gray-500 font-medium">/ user</span>
                            </div>
                        </div>
                        <ul className="mb-7 font-medium text-gray-500">
                            <li className="flex text-lg mb-2">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    All features in <span className="text-black">Startup</span>
                                </span>
                            </li>
                            <li className="flex text-lg mb-2">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    Growth <span className="text-black">oriented</span>
                                </span>
                            </li>
                            <li className="flex text-lg">
                                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                                <span className="ml-3">
                                    <span className="text-black">Unlimited</span> cloud storage
                                </span>
                            </li>
                        </ul>
                        <button onClick={paymentHandler}
                            className=" App-link flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-20 text-center text-white text-xl"
                        >
                            Choose Plan
                            <img
                                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                className="ml-2"
                            />
                        </button>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Premium