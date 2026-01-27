

import React from 'react'
import Hero from './Hero'
import Filter from './Filter'
import CartIems from "./CardLest"
import BrandLogo from './BrandLogo'
import Reviews from './Reviews'
import Footer from './Footer'

function MainPage() {
    return (
    <>
    <main className=' overflow-hidden mx-w[1440px]'>
        <Hero/>
        <Filter/>
        <CartIems/>
        </main>
        <BrandLogo/>
        <Reviews/>
        <Footer/>
    </>
    )
}

export default MainPage