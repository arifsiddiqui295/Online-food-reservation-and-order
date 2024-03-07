import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const navigate=useNavigate()
    const [data, setData] = useState()
    useEffect(() => {
        const renderMenu = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                // console.log("response =", response);
                setData(response.data);
                // console.log("data =", data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        renderMenu();
    }, []);
    useEffect(() => {
        // console.log("data =", data);
    }, [data])
     const goDishes=(category)=>{
        console.log( "clicked = "+category.strCategory)
        navigate('/dish', { state: category.strCategory  });
     }
    return (
        <div className='w-screen bg-slate-200' >
            <Navbar />
            <div className="flex flex-wrap gap-6 justify-center ">
                {data && data.categories && data.categories.map((category) => (
                    <div key={category.idCategory} className="flex justify-center ">
                        <div className="relative w-96 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
                            <div className="relative mx-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
                                <img
                                    src={category.strCategoryThumb}
                                    alt={category.strCategory}
                                    className="h-52 object-cover "
                                />
                            </div>
                            <div className="p-6 overflow-hidden">
                                <div className="mb-2 flex items-center justify-between">
                                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased ">
                                        {category.strCategory}
                                    </p>
                                </div>
                                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 overflow-hidden text-ellipsis whitespace-nowrap ">
                                    {category.strCategoryDescription}
                                </p>
                            </div>
                            <div className="p-6 pt-0 overflow-hidden">
                                <button
                                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                                    type="button"
                                    onClick={() => goDishes(category)}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* stylesheet */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                />
            </div>
        </div>
    );

}

export default Menu