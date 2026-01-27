

import React from 'react'

const LogoItem = [
    {
        logo : "/brandlogo1.svg",
        name : "Subaru",
        price : "from $40k"
    },
    {
        logo : "/brandlogo2.svg",
        name : "Volkswagen",
        price : "from $15k"
    },
    {
        logo : "/brandlogo3.svg",
        name : "Toyota",
        price : "from $27k"
    },
    {
        logo : "/brandlogo4.svg",
        name : "Mercedes-Benz",
        price : "from $60k"
    },

    {
        logo : "/brandlogo5.svg",
        name : "Hyundai",
        price : "from $30k"
    },
    {
        logo : "/brandlogo6.svg",
        name : "Infiniti",
        price : "from $54k"
    },
]


function BrandLogo() {
    return (
    <>
    <div className='px-6 sm:px-8 md:px-12 lg:px-16 py-5 md:py-10 w-[90%] mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3  gap-y-5'>
            {LogoItem.map((item ,i)=>(
                    <div key={i} className='flex gap-5 hover:transition-all duration-300 hover:bg-gray-50 hover:shadow-2xl hover:scale-105 rounded-2xl'>
                        <img src={item.logo} alt="" />
                        <div>
                            <h1 className=' font-bold'>{item.name}</h1>
                            <p className='text-gray-500 font-semibold'>{item.price}</p>
                        </div>
                    </div>
            ))}
        </div>
    </div>
    </>
    )
}

export default BrandLogo;