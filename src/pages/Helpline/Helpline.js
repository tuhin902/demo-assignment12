import React from 'react';
import { FaMapMarkedAlt, FaBlenderPhone } from "react-icons/fa";

const Helpline = () => {
    return (
        <div className=' flex justify-evenly min-h-screen bg-black w-full h-60 rounded-xl p-20 text-white'>
            <div className='flex w-1/2 '>
                <FaMapMarkedAlt className='text-red-700 text-3xl mx-6'></FaMapMarkedAlt>
                <div>
                    <p className='text-2xl'>Need a repair? our address</p>
                    <p className='text-2xl'>Liza Street, New York</p>
                </div>
            </div>
            <div className='flex w-1/2'>
                <FaBlenderPhone className='text-red-700 text-3xl mx-6' ></FaBlenderPhone>
                <div>
                    <p className='text-2xl'>Have a question?</p>
                    <p className='text-2xl'>+2546 251 2658</p>
                </div>
            </div>
        </div>
    );
};

export default Helpline;