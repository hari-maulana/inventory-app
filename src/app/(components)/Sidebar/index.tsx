"use client";

import React from 'react'
import {Menu, MenuIcon} from "lucide-react"

const index = () => {
  return (
    <div className='bg-red-100 '>
        {/* top logo */}
        <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            <div>logo</div>
            <h1 className="font-extrabold text-2xl">STOCKER
            </h1>
            <button
                className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
            >
                <Menu />
            </button>
        </div>

        {/* Links */}
        <div className='flex-grow mt-8'> {/* links here */}</div>

        {/* footer */}
        <div>
            <p className='text-center text-xs text-gray-500'>2024 Stocker</p>
        </div>




    </div>
  )
}

export default index