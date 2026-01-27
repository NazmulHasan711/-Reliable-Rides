

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@heroui/react'

function Error() {
    return (
    <>
    <div className='w-[90%] mx-auto mt-50 '>
        <h1 className='text-5xl text-center font-bold mb-5'>Page Error </h1>
        <h1 className='text-5xl font-bold text-center mb-5'>404</h1>
        <div className='flex justify-center'>
            <NavLink to="/"><button className='px-4 py-2 rounded-xl bg-indigo-500 text-white'>Back Home</button></NavLink>
        </div>
    </div>
    </>
    )
}

export default Error