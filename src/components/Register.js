import React from 'react'
import Navbar from './Navbar'
import inside_bus from '../assets/inside_bus.jpeg'
import { TEInput, TERipple } from "tw-elements-react";

export default function Register() {
  return (
    <>
    <Navbar/>
    <div className='h-screen bg-gradient-to-r from-sky-500 to-indigo-400'>
        <div className='flex h-screen items-center justify-center'>
            <form className='flex py-5 bg-white rounded-lg'>
                <div>
                     <h1 className='mb-4'>Register Now !</h1>
                     <input classname='mr-2' type='text' placeholder='First name'></input>
                     <input type='text' placeholder='Last name'></input>
                     <input type='text' placeholder='Citizenship number' className='w-full'></input>
                     <input type='text' placeholder='Date of birth' className='w-full'></input>
                </div>
            </form>
        </div>
    </div>
  </>
  )
}