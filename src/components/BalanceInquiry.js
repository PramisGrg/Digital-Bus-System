import React from 'react'
import Navbar from './Navbar'

export default function BalanceInquiry() {
  return (
    <div>
    <Navbar/>
     <div className='bg-gradient-to-r from-sky-500 to-indigo-400'>
        <div className='grid place-items-center h-screen'>
         <form className=' bg-sky-100 p-10 rounded-md'>
           <h2 className='flex justify-center text-2xl'>Login !</h2>
            <p className='mb-4'>Please enter your details.</p>
           <div>
              <label >Phone number</label>
              <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Enter your number' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2' required></input>
          </div>
          <div>
            <label for='phoneNumber'>Password</label>
            <input type='password' id='phoneNumber' placeholder='Enter your Password' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2'></input>
          </div>
          <button className=' w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2'>Submit</button>
         </form>
       </div>
       </div>
    </div>
  )
}
