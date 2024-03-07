import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Dish = (props) => {
    const [dishes, setDishes] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const recipe = async () => {
            console.log("location = ",location.state);
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${location.state}`);
                console.log("response = ", response.data);
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        recipe();
    }, []);

    useEffect(() => {
        // console.log("dishes from use = ", dishes);
    }, [dishes]);

    return (
        <div className='relative h-screen w-screen items-center justify-center'>
            <Navbar />
           <div className='flex flex-wrap gap-6 justify-center z-10 '>
           {dishes && dishes.meals && dishes.meals.map((meal, index) => (
                // <h1 key={index}>{meal.strMeal}</h1>
                <div key={index} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ">
                    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <img
                            src={meal.strMealThumb}
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {meal.strMeal}
                        </h5>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                        >
                           Order Now
                        </button>
                    </div>
                </div>

            ))}
           </div>
        </div>
    );
};

export default Dish;
