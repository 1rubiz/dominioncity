import React from 'react';
import { FaBible } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className=' absolute top-0 z-[5] left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='relative mt-[20vh] mb-2 text-[29px] flex justify-center items-center'>
           <div className='absolute mt-[30vh] w-20 h-20 border-t-4 border-blue-500 border-solid rounded-full animate-spin'/>
           <FaBible className='mt-[30vh] w-30 h-30'/>
          </div>
    </div>
  )
}
