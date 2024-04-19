import React from 'react'
import { useState } from 'react';
import { FaHome, FaCamera, FaMoneyBill, FaImages } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '/logo.png'

function Nav() {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <div className='lg:w-[30%] bg-red-800 lg:h-screen lg:max-h-screen lg:overflow-y-hidden lg:bg-white'>
    <div className='bg-white h-[17.7vh] flex fixed top-0 left-0 z-10 w-[100%] lg:hidden'>
       <Link to='/'> <motion.img 
            src={logo}
            className='w-[30vh] h-[15vh] mt-4 ml-8 mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        /></Link>
        <motion.div 
            className='absolute top-[5vh] z-[50] right-9'
        >
        {nav ? (
            <IoCloseOutline className='h-[6vh] w-[4.7vh] text-[#164863]' onClick={handleNav}/>
        ) : (
            <FaBars className='h-[6vh] w-[3vh] text-[#164863]' onClick={handleNav}/>
        )}
        </motion.div>
        <AnimatePresence>
        {
            nav && (
                <motion.div className='absolute bg-[white] p-9 top-[9.7vh] right-0 z-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[14px] w-[100%] flex flex-col gap-8 font-bold text-[white]'>
                    <Link to='/'><motion.li className='p-2 bg-[#164863] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >HOME</motion.li></Link>
                       <Link to='/media'> <motion.li
                            className='p-2 bg-[#164863] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >MEDIA</motion.li></Link>
                        <Link to='/offering'><motion.li
                            className='p-2 bg-[#164863] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >OFFERINGS</motion.li></Link>
                        <Link to='/gallery'> <motion.li
                            className='p-2 bg-[#164863] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >GALLERY</motion.li></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
    <nav className="bg-white hidden lg:block ">
          <div className="h-screen">
            <div className="w-[100%] h-[100%]">
              <div className="flex justify-center items-center w-[100%] mb-[2vh]">
                <Link to='/'><img
                  className="h-[10vh] lg:h-[17vh] w-[28vh] lg:w-[40vh] bg-white md:mt-[9vh] lg:mt-[5vh]"
                  src={logo}
                  alt="Workflow"
                /></Link>
              </div>
              <div className="hidden md:block w-[100%] h-[100%] bg-black">
                <div className="flex flex-col items-baseline">
                  <div className='w-[100%] p-2 hover:bg-[#164863]'><a
                    href="/"
                    className=" text-white flex items-center gap-6 border-b-2 border-[#164863]  px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
                  >
                    HOME <FaHome/>
                  </a>
                  </div>

                  <div className='w-[100%] p-2 hover:bg-[#164863]'>
                  <a
                    href="/media"
                    className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
                  >
                    MEDIA <FaCamera/>
                  </a>
                  </div>

                  <div className='w-[100%] p-2 hover:bg-[#164863]'>
                  <a
                    href="/offering"
                    className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
                  >
                    OFFERINGS <FaMoneyBill/>
                  </a>
                  </div>

                  <div className='w-[100%] p-2 hover:bg-[#164863]'>
                  <a
                    href="/gallery"
                    className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
                  >
                    GALLERY <FaImages/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      </nav>
      </div>
  )
}

export default Nav