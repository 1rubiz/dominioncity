import React from 'react'
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
import logo from '/logo.png'

function Nav() {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <>
    <div className='bg-white h-[17.7vh] w-[100%] flex fixed top-0 left-0 z-10 w-[100%] md:hidden'>
       <Link to='/'> <motion.img 
            src={logo}
            className='w-[30vh] h-[15vh] mt-4 ml-8 mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        /></Link>
        <motion.div 
            className='absolute top-[5vh] right-9'
            // initial={{y: 0}}
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
                    transition={{duration: 1}}
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
    <nav className="bg-white h-[15.3vh] w-[100%] fixed top-0 left-0 z-10 transparent hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to='/'><img
                  className="h-[13vh] w-[30vh] bg-white md:mt-[9vh] lg:mt-[8vh]"
                  src={logo}
                  alt="Workflow"
                /></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 mt-[8%] flex items-baseline space-x-4">
                  <a
                    href="/"
                    className=" hover:bg-gray-700 hover:text-white border-b-2 border-[#164863]  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>

                  <a
                    href="/media"
                    className=" hover:bg-gray-700 hover:text-white border-b-2 border-[#164863] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    MEDIA
                  </a>

                  <a
                    href="/offering"
                    className=" hover:bg-gray-700 hover:text-white border-b-2 border-[#164863] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    OFFERINGS
                  </a>

                  <a
                    href="/gallery"
                    className=" hover:bg-gray-700 hover:text-white border-b-2 border-[#164863] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    GALLERY
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
      </>
  )
}

export default Nav