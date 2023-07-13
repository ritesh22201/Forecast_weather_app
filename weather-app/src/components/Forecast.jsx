import React from 'react';
import sunImg from '../Images/sunImg2.jpg'
import { iconUrlFromCode } from '../services/weatherService';

const Forecast = ({ title, items }) => {
    console.log(items)
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='my-2' />
            <div className='flex justify-between'>
                <div style={{width : '100%'}} className='flex flex-row items-center justify-between text-white'>
                    {items.map((el, i) => {
                        return <div key={i} className='flex flex-col items-center justify-center'>
                            <p className='font-light text-sm'>{el.title}</p>
                            <img src={iconUrlFromCode(el.icons)} className='w-12 my-1 rounded-full' alt="" />
                            <p className='font-medium'>{el.temp.toFixed()}°</p>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Forecast;