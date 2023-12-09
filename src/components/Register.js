import React from 'react'
import Navbar from './Navbar'
import inside_bus from '../assets/insidethebus.jpeg'

export default function Register() {
  return (
    <body>
      <Navbar/>
    <div class="min-h-screen py-40 bg-gradient-to-r from-sky-500 to-indigo-200 ">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center">
            <img src={inside_bus}></img>
          </div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2  class="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Create your account. It’s free and only take a minute
            </p>
              <form action="#">
                  <div className>
                    <input type="text" placeholder="First Name" class="border border-gray-400 py-1 px-2 mr-2"></input>
                    <input type="text" placeholder="Last Name" class="border border-gray-400 py-1 px-2 ml-2"></input>
                  </div>
                 <div class="mt-5">
                   <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full"></input>
                 </div>
                 <div class="mt-5">
                    <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full"></input>
                  </div> 
                  <div class="mt-5">
                    <input type="tel" placeholder="Phone number" class="border border-gray-400 py-1 px-2 w-full"></input>
                  </div>
                  <div class="mt-5">
                    <input type="text" placeholder="Citizenship number" class="border border-gray-400 py-1 px-2 w-full"></input>
                  </div>
                   <div class="mt-5">
                    <input type="checkbox" class="border border-gray-400></input"></input>
                  </div>
                  <span>
                  I accept the <a href="#" class="text-blue-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-blue-500 font-semibold">Privacy Policy</a> 
                  </span>
                  <div class="mt-5">
                      <button class="w-full bg-blue-600 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center my-2 hover:scale-105 duration-300">Register Now</button>
                   </div>
                </form>
              </div>
         </div>
      </div>
    </div>
  </body>
  )
}