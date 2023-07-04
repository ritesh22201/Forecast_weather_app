import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Tuesday, 4 July 2023 | Local time: 19:05
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                Berlin, DE
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation;