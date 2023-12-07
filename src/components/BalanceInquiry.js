import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Register from './Register'

export default function BalanceInquiry() {
  return (
    <div>
    <Navbar/>
     <div className='bg-gradient-to-r from-sky-500 to-indigo-400'>
        <div className='grid place-items-center h-screen pb-10'>
         <form className='bg-sky-100 p-10 rounded-md'>
           <h2 className='flex font-bold justify-center text-2xl'>Sign Up !</h2>
            <p className='flex justify-center mb-5'>Please enter your details.</p>
           <div>
              <label >Phone number</label>
              <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2' required></input>
          </div>
          <div>
            <label for='phoneNumber'>Password</label>
            <input type='password' id='phoneNumber' placeholder='password' className='w-full border rounded-md bg-transparent border-gray-400 p-3 my-2'></input>
          </div>
          <button className=' w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300' onClick={console.log("Check Balance")}>Check Balance</button>
          <div className='mt-5 text-sm flex justify-between items-center'>
            <p>Don't have account ?</p>
            <Link to='/register' element={<Register/>}>
                <button className='py-2 px-5 bg-white border rounded-xl hover:scale-120 duration-300'>Register</button>
            </Link>
          </div>
         </form>
       </div>
       </div>
    </div>
  )
}
