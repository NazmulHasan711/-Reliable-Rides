
import React, { useState } from 'react'

function Login() {

    // const [user , setuser] = useState({
    //     FastName : "",
    //     LastName: "",
    //     Email : "",
    //     Password : ""

    // })

    // const [subInfo , setSubInfo] = useState({
    //     FastName : "",
    //     LastName: "",
    //     Email : "",
    //     Password : ""

    // })

    // const HandelChange = (e)=>{
    //     const{name , value} =e.target

    //     setuser((prop)=>({
    //         ...prop,
    //         [name]: value
    //     }))
        
    // }

    // const HandelSub = (pre)=>{

    //     pre.preventDefault()
    //         setSubInfo(user)

    //     setuser({
    //     FastName : "",
    //     LastName: "",
    //     Email : "",
    //     Password : ""
    //     })
    // }


    const [user, setuser] = useState({
        FastName : "",
        LastName: "",
        Email : "",
        Password : ""
    })

    const [sub, setsub ]= useState({
        FastName : "",
        LastName: "",
        Email : "",
        Password : ""
    })

    const HandleChange = (e)=>{
        const {name , value}  = e.target;

        setuser((props)=>({
            ...props,

            [name]:value
        }))
    }

    const HandleSub = (p)=>{
        p.preventDefault()

        setsub(user)

        setuser({
        FastName : "",
        LastName: "",
        Email : "",
        Password : ""
        })
    }
    

    return (
    <>
    <div className='  px-10 sm:px-16 md:px-20 lg:px-24 md:w-[60%] mx-auto'>
        <form onSubmit={HandleSub} className= 'flex flex-col justify-center gap-3 bg-sky-400 px-10 py-5 rounded-2xl mt-5' >

            <h1 className='text-center text-xl font-semibold pcolor border-b-1 py-4'>Wellcome to Wazia </h1>

            <label htmlFor=""> Fast Name </label>
            <input onChange={HandleChange} type="text" name='FastName' value={user.FastName} placeholder='Type Your Fast Name' className='px-4 py-2 border-1 border-amber-300 rounded-2xl'/>

            <label htmlFor=""> Last Name </label>
            <input onChange={HandleChange} type="text" name="LastName" value={user.LastName} placeholder='Type Your Last Name' className='px-4 py-2 border-1 border-amber-300 rounded-2xl'/>

            <label htmlFor=""> Email </label>
            <input onChange={HandleChange} type="Email" name="Email" value={user.Email} placeholder='Type Your Email'className='px-4 py-2 border-1 border-amber-300 rounded-2xl' />

            <label htmlFor=""> Password </label>
            <input onChange={HandleChange} type="password" name="Password" value={user.Password} placeholder='Type Your Password'className='px-4 py-2 border-1 border-amber-300 rounded-2xl' />

            <button type='submit' className='mybutton px-4 py-2 rounded-2xl hover:scale-80 cursor-pointer'>Submit</button>


        </form>

        <div className='px-5 py-2.5 '>
            <h2>Fast Name: {sub.FastName}</h2>
            <h2>Last Name: {sub.LastName}</h2>
            <h2>Email: {sub.Email}</h2>
            <h2>Password: {sub.Password}</h2>

        </div>
    </div>
    </>
    )
}

export default Login;


