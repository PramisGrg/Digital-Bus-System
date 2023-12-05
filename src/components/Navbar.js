import React,{useState} from 'react'
import { FaBusAlt, FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
    {
        title : 'Home',
        link : '/',
    },
    {
        title : 'About',
        link : '/about',
    },
    {
        title : 'Member Login',
        link : '/member_login',
    },
]


export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen((prev) => !prev);
    }

  return (
    <div className='shadow-lg w-full p-4'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-centre justify-between h-16'>
                <div className='flex items-center'>
                    <div className='text-3xl pr-2 pt-2'>
                        <FaBusAlt/>
                    </div>
                    <a href='/' className='font-bold pt-3 text-3xl'>यात्रा को सहयात्री</a>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {navlinks.map((link,index) => (
                            <a
                            key={index}
                            className='text-xl text-gray-700 transition-all duration-500 hover:bg-blue-600 hover:text-white mt-2 px-3 py-2 rounded-md text-md'
                            >{link.title}</a>
                        ))}
                    </div>
                </div>
                <div className='mr-2 flex md:hidden'>
                    <button type='button' onClick={() => {}} className='flex items-center justify-center p-2 rounded-md duration-300 hover:bg-blue-300'>
                        <span className='sr-only'>Open Main Menu</span>
                        {open == true ? <FaTimes/> : <FaBars/>}
                    </button>
                </div>
              </div>
            </div> 
            { open ? (
                <div className='md:hidden'> 
                    <div className='pt-2 pb-3 ox-2 space-y-1 sm:px-3'>
                    {navlinks.map((link) => (
                            <a
                            className='text-gray-300 transition-all duration-500 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-md'
                            >{link.title}</a>
                        ))}
                    </div>
                </div>
                ): null}
    </div>
  )
}