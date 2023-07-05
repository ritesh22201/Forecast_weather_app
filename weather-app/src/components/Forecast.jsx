import React from 'react';
import sunImg from '../Images/sunImg2.jpg'
//72f92dfc9ea322d61ceb817923a73cdf
const Forecast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='my-2' />
            <div className='flex justify-between'>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>04:30 PM</p>
                        <img src={sunImg} className='w-12 my-1 rounded-full' alt="" />
                        <p className='font-medium'>22°</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>04:30 PM</p>
                        <img src={sunImg} className='w-12 my-1 rounded-full' alt="" />
                        <p className='font-medium'>22°</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>04:30 PM</p>
                        <img src={sunImg} className='w-12 my-1 rounded-full' alt="" />
                        <p className='font-medium'>22°</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>04:30 PM</p>
                        <img src={sunImg} className='w-12 my-1 rounded-full' alt="" />
                        <p className='font-medium'>22°</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between text-white'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-light text-sm'>04:30 PM</p>
                        <img src={sunImg} className='w-12 my-1 rounded-full' alt="" />
                        <p className='font-medium'>22°</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;