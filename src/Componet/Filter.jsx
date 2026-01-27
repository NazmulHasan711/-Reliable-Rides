import React from "react"

const Type = () =>(
    <label >
        <span className="font-bold text-sm">Type </span>
        <select className="flex bg-gray-300 px-4 py-2 rounded-xl ">

            <option >New Car</option>
            <option >Old Car</option>
            <option >Vabgari Car</option>
            <option >Corai Car</option>

        </select>
        <div>
            
        </div>
        
    </label>
)

const Make = () => (
    <label >
        <span className="font-bold text-sm"> Make</span>
        <select className="flex bg-gray-300 px-4 py-2 rounded-xl">

            <option >Infinity</option>
            <option >Bangladesh</option>
            <option >Japan</option>
            <option >Chaina</option>

        </select>
        
    </label>
)

const Year =()=> (
    <label >
        <span className="font-bold text-sm"> Year</span>
        <select className="flex bg-gray-300 px-4 py-2 rounded-xl">

            <option >2000</option>
            <option >2005</option>
            <option >2010</option>
            <option >2020</option>

        </select>
        
    </label>
)

const Model =() =>(
    <label >
        <span className="font-bold text-sm"> Model</span>
        <select className="flex bg-gray-300 px-4 py-2 rounded-xl">

            <option >BMW i5</option>
            <option >BMW iX M60</option>
            <option >BMW iX Full-Electric</option>
            <option > BMW i</option>

        </select>
        
    </label>
)

const Price = ()=>(
    <label >
        <span className="font-bold text-sm"> Price</span>
        <select className="flex bg-gray-300 px-4 py-2 rounded-xl">

            <option >2M - 4M</option>
            <option >6M - 8M</option>
            <option >10M - 12M</option>
            <option > 14M - 16M</option>

        </select>
        
    </label>
)


const Filter =() =>{
    return(
        <>
        <div className=" px-5 md:px-10 lg:px-16 py-5 md:py-10 mb-10">
            <h1 className="text-center text-xl sm:text-3xl font-semibold mb-10">Which vehicles you are looking for? </h1>
            <div className="md:flex justify-center  md:gap-5 grid ">

                <Type/>
                <Make/>
                <Year/>
                <Model/>
                <Price/>

                    <button className="bg-[#7963F0] px-3 py-1  rounded-2xl text-white mt-5"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
            </div>
        </div>
        </>
    )
}

export default Filter