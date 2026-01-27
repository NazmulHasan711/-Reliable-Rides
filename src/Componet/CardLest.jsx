
import React from 'react'

function CartIems() {

    const Itemlist = [
        {
            img : "/card1.svg",
            carName : "Used 2019 Audi S4 Premium Plus",
            Miles: "11 475 Miles",
            Cylinder:"4-Cylinder Turbo",
            price : "$41,400",
            sell : "Bestseller"


        },
        {
            img : "/card2.svg",
            carName : "Used 2019 Audi S4 Premium Plus",
            Miles: "11 475 Miles",
            Cylinder:"4-Cylinder Turbo",
            price : "$41,400",
            sell : "Bestseller"


        },
        {
            img : "/card3.svg",
            carName : "Used 2019 Audi S4 Premium Plus",
            Miles: "11 475 Miles",
            Cylinder:"4-Cylinder Turbo",
            price : "$41,400",
            sell : "Bestseller"


        },
    ]

    return (
    <>
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-3 px-6 md:px-10 lg:px-16 py-5 md:py-10 gap-5 '>
            {Itemlist.map((item , i)=>(
                <div key={i} className='  px-4 py-2 rounded-xl hover:transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 cursor-pointer'>
                    
                        <img src={item.img} alt="" />
                        <h1 className='text-sm md:text-sm mt-2 font-bold '>{item.carName}</h1>
                        <p className='text-gray-700 font-semibold'>{item.Miles}</p>
                        <p className='text-gray-700 font-semibold'>{item.Cylinder}</p>

                        <div className='flex gap-5 mt-5'>
                            <button className='bg-[#4f419c2c] px-4 py-1 rounded-xl text-[#7963F0] font-bold'>{item.price}</button>
                            <button className='bg-[#4f419c2c] px-4 py-1 rounded-xl text-[#110456] font-bold'>{item.sell}</button>

                        </div>
                    </div>
                
            ))}
        </div>
    </div>
    </>
    )
}

export default CartIems;