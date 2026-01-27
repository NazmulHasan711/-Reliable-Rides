
import React, { useState } from 'react'

import car1 from "/car1.jpg"
import car2 from "/car2.jpg"
import car3 from "/car3.jpg"
import car4 from "/car4.jpg"
import car5 from "/car5.jpg"
import car6 from "/car6.jpg"


function Hero() {

    const HeroItem = [
        {
            pera : "Meet your new car",
            hading : "Honda Civic Type R" ,
            img : car5
        },
        {
            pera : "Meet your new car",
            hading : "Hyundai Tucson" ,
            img : car1
        },
        {
            pera : "Nissan X-Trail",
            hading : "Tesla Model S" ,
            img :car2
        },
        {
            pera : "Mitsubishi Montero",
            hading : "Audi A6" ,
            img :car3
        },
        {
            pera : "Mitsubishi Montero",
            hading : "BMW 5 Series" ,
            img :car4
        },
        {
            pera : "Toyota Land Cruiser Prado",
            hading : "Mercedes-Benz S-Class" ,
            img :car5
        },
        {
            pera : "Nissan X-Trail",
            hading : "Mitsubishi Montero" ,
            img :car6
        },
    ]

    const [change , setchange] =useState(0)

    const Next = ()=>{
        setchange(change===0? HeroItem.length-1 : change-1)
    }

    const Pre = ()=>{
        setchange(change===HeroItem.length-1? 0 : change+1)
    }


    return (
    <>
    <div className='container px-5 sm:px-12 md:px-16 lg:px-20 py-5 mt-10 w-[90%] mx-auto'>
        <div className='w-[90%] mx-auto'>
            <p className='text-center '>{HeroItem[change].pera}</p>
            <h1 className='text-3xl md:text-5xl mt-5 text-center font-semibold'>{HeroItem[change].hading}</h1>

            <div className='flex gap-4 justify-center mt-8 mb-8'>
                <button className='bg-[#F5F6F7] text-[#9A9EA7] hover:bg-[#7963F0] hover:text-white font-semibold px-4 py-2 rounded-xl'>More Details</button>

                <button className='bg-[#7963F0] text-white font-semibold     px-4 py-2 rounded-xl hover:bg-[#F5F6F7] hover:text-[#7963F0]'>Test Drive</button>
            </div>

            <div className='flex justify-between mt-5 mb-5'>
            <button onClick={Next}><i class="fa-solid fa-angles-left"></i></button>
            <button onClick={Pre}><i class="fa-solid fa-angles-right"></i></button>
        </div>

            <img src={HeroItem[change].img} alt="" className='w-[80%] h-[50%] mx-auto'/>
        </div>

        
    </div>
    </>
    )
}

export default Hero