

import React from 'react'

function Footer() {
    return (
    <>
    <div className='overflow-hidden'>
        <h1 className='text-2xl md:text-3xl font-semibold text-center mt-5'>Find vehicles near you</h1>
        <img src="Map.svg" alt="" />

        <footer className='flex border-t-1 border-gray-500 justify-between'>
            <div className='flex gap-5   mb-5'>
                <h5 className='font-semibold'>Privacy Policy</h5>
            <p className='text-gray-500'>Term of Use</p>
            <p className='text-gray-500'>© 2021 All rights reserved</p>

            
            </div>

            <div className='flex gap-5 px-4'>
                <img className='w-5' src="/wolrd.svg" alt="" />
                <p className='text-gray-600 my-auto'>English</p>
                <img className='w-5' src="dot.svg" alt="" />
                <p className='text-gray-600 my-auto'>USD</p>
            </div>

            
        </footer>

    </div>
    </>
    )
}

export default Footer; 