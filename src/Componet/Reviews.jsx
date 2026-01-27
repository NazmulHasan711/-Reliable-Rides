
import React from 'react'

const ReviewCard = [
    {
        img : "/card4.svg",
        hadar : "2021 Cadillac Escalade",
        text: "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
        logo : "/man1.svg",
        name : "Hironaka Hiroe",
        prof : "Chief Editor",

    },
    {
        img : "/card5.svg",
        hadar : "2021 Mercedes-Benz GLA250",
        text: "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
        logo : "/man2.svg",
        name : "Lew Silverton",
        prof : "Chief Editor",

    },
    {
        img : "/card6.svg",
        hadar : "2021 Hyundai Elantra",
        text: "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. .",
        logo : "/man3.svg",
        name : "Debashis Bhuiyan",
        prof : "News Editor",

    },
]


function Reviews() {
    return (
    <>
    <div className='px-5 sm:px-10 md:px-12 lg:px-16 py-5 md:py-10 '>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                {ReviewCard.map((item , i)=>(
                    <div key={i} className='hover:transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-200 rounded-xl px-2'>
                        <img src={item.img} alt="" />
                        <h1 className='font-bold text-xl mt-2'>{item.hadar}</h1>
                        <p className='text-gray-500 mt-2'>{item.text}</p>
                        
                        <div className='flex justify-between mt-5'>
                            <div className='flex gap-3'>
                                <img src={item.logo} alt="" />
                                <h5 className=' font-semibold'>{item.name} <br />
                                <span className='text-sm font-semibold text-gray-600'>{item.prof}</span></h5>
                            </div>

                            <div className='flex'>
                                <img className='w-5 my-auto mx-auto' src="/star.svg" alt="" />
                                <p className='my-auto font-bold'>5 <span className='text-gray-500'>(90)</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    </>
    )
}

export default Reviews; 