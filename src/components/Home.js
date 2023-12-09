import React from 'react'
import bus from '../assets/bus.jpeg'
import Navbar from './Navbar'
import Maps from './Maps.js'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-2 bg-gradient-to-r from-sky-500 to-indigo-200'>
         <div>
           <img src={bus} alt='busPicture'></img>
         </div>
        <div className='grid place-items-center h-screen'>
         <form className='bg-sky-100 p-10 rounded-md'>
           <h2 className='font-bold text-2xl'>Login !</h2>
            <p className='mb-4'>Welcome back, please enter your details.</p>
           <div>
              <label >Username</label>
              <input type='text' placeholder='Enter your Username' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2'></input>
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='Enter your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2'></input>
          </div>
          <button className=' w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300'>Submit</button>
         </form>
       </div>
       </div>
       <Maps/>
    </div>  
  )
}
