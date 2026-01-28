

import React from 'react'

function Footer() {
    return (
    <>
    <div className='overflow-hidden'>
        <h1 className='text-2xl md:text-3xl font-semibold text-center mt-5'>Find vehicles near you</h1>
        <img src="Map.svg" alt="" />

        <footer className='md:flex border-t-1 border-gray-500 justify-between grid grid-row-2 px-5 md:px-10'>
            <div className='flex gap-5   mb-5'>
                <h5 className='font-semibold text-small'>Privacy Policy</h5>
            <p className='text-gray-500 text-small'>Term of Use</p>
            <p className='text-gray-500 text-small'>© 2021 All rights reserved</p>

            
            </div>

            <div className='flex gap-5 px-4'>
                <img className='md:w-5 w-2' src="/wolrd.svg" alt="" />
                <p className='text-gray-600 my-auto'>English</p>
                <img className='md:w-5 w-2' src="dot.svg" alt="" />
                <p className='text-gray-600 my-auto'>USD</p>
            </div>

            
        </footer>

    </div>
    </>
    )
}

export default Footer; 