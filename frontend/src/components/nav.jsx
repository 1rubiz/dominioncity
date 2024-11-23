// import React from 'react'
// import { useState } from 'react';
import { useEffect } from 'react';
import { FaHome, FaCamera, FaMoneyBill, FaImages, FaYoutube } from 'react-icons/fa';
// import { IoCloseOutline } from 'react-icons/io5';
// import { FaBars } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import logo from '/logo.png'

// function Nav() {
//     const [nav, setNav]= useState(false);
//     const handleNav = ()=>{
//         setNav(!nav);
//     }

//   return (
//     <div className='lg:w-[30%] bg-red-800 lg:h-screen lg:max-h-screen lg:overflow-y-hidden lg:bg-white'>
//     <div className='w-[100%] md:hidden'>
//                 <motion.div className='hover:opacity-30 opacity-80 fixed bg-[black] w-full h-[9svh] p-3 bottom-0 left-0 z-[20]'
//                     initial={{opacity: 0}}
//                     animate={{opacity: 1}}
//                     exit={{ opacity: 0 }}
//                     >
//                     <div className='list-none text-[19px] w-[100%] opacity-50 hover:opacity-90 flex justify-between items-center gap-5 pr-5 pl-5 font-bold text-[white]'>
//                     <Link to='/'><motion.li className='p-2 bg-[#164863] rounded-[9px]'
//                             initial={{x: 30}}
//                             animate={{x: 0}}
//                             transition={{duration: 1}}
//                             onClick={handleNav}
//                         ><FaHome/></motion.li></Link>
//                        <Link to='/media'> <motion.li
//                             className='p-2 bg-[#164863] rounded-[9px]'
//                             initial={{x: 30}}
//                             animate={{x: 0}}
//                             transition={{duration: 1}}
//                             onClick={handleNav}
//                         ><FaYoutube/></motion.li></Link>
//                         <Link to='/offering'><motion.li
//                             className='p-2 bg-[#164863] rounded-[9px]'
//                             initial={{x: 30}}
//                             animate={{x: 0}}
//                             transition={{duration: 1}}
//                             onClick={handleNav}
//                         ><FaMoneyBill/></motion.li></Link>
//                         <Link to='/gallery'> <motion.li
//                             className='p-2 bg-[#164863] rounded-[9px]'
//                             initial={{x: 0}}
//                             animate={{x: 0}}
//                             transition={{duration: 1}}
//                             onClick={handleNav}
//                         ><FaImages/></motion.li></Link>
//                     </div>
//                 </motion.div>

//     </div>
//     <nav className="bg-white hidden md:block ">
//           <div className="h-screen">
//             <div className="w-[100%] h-[100%]">
//               <div className="flex justify-center items-center w-[100%] mb-[2vh]">
//                 <Link to='/'><img
//                   className="h-[10vh] lg:h-[17vh] w-[28vh] lg:w-[40vh] bg-white md:mt-[9vh] lg:mt-[5vh]"
//                   src={logo}
//                   alt="Workflow"
//                 /></Link>
//               </div>
//               <div className="hidden md:block w-[100%] h-[100%] bg-black">
//                 <div className="flex flex-col items-baseline">
//                   <div className='w-[100%] p-2 hover:bg-[#164863]'><a
//                     href="/"
//                     className=" text-white flex items-center gap-6 border-b-2 border-[#164863]  px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
//                   >
//                     HOME <FaHome/>
//                   </a>
//                   </div>

//                   <div className='w-[100%] p-2 hover:bg-[#164863]'>
//                   <a
//                     href="/media"
//                     className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
//                   >
//                     MEDIA <FaCamera/>
//                   </a>
//                   </div>

//                   <div className='w-[100%] p-2 hover:bg-[#164863]'>
//                   <a
//                     href="/offering"
//                     className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
//                   >
//                     OFFERINGS <FaMoneyBill/>
//                   </a>
//                   </div>

//                   <div className='w-[100%] p-2 hover:bg-[#164863]'>
//                   <a
//                     href="/gallery"
//                     className=" text-white flex items-center gap-6 border-b-2 border-[#164863] px-3 py-2 rounded-md text-[3.5vh] font-serif font-medium"
//                   >
//                     GALLERY <FaImages/>
//                   </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//       </nav>
//       </div>
//   )
// }

// export default Nav

function Nav() {
  const { pathname } = useLocation()
  useEffect(()=>{
    console.log(pathname)
  }, [pathname])
  return (
    <div className='fixed z-40 w-full top-0 right-0 bg-transparent flex items-center justify-center p-4'>
      <div className='flex items-center justify-between w-full lg:w-1/2 bg-white/30 backdrop-blur-md border border-white/50 rounded-xl md:w-[80%] shadow-lg py-2 px-4 lg:py-1'>
        <Link to='/'><div className={`${pathname === '/' && 'bg-black rounded-md'} flex items-center gap-2 text-xl hover:border-b-2 p-2 border-[#9B2915]`}>
          <FaHome className='text-base md:text-2xl text-[#F4F7F5]'/>
          <p className='text-gray-200 hidden md:inline-block'>Home</p>
        </div></Link>
        <Link to='/media'><div className={`${pathname === '/media' && 'bg-black rounded-md'} flex items-center gap-2 text-xl hover:border-b-2 p-2 border-[#9B2915]`}>
          <FaCamera className='text-base md:text-2xl text-[#F4F7F5]'/>
          <p className='text-gray-200 hidden md:inline-block'>Media</p>
        </div></Link>
        <Link to='/offering'><div className={`${pathname === '/offering' && 'bg-black rounded-md'} flex items-center gap-2 text-xl hover:border-b-2 p-2 border-[#9B2915]`}>
          <FaMoneyBill className='text-base md:text-2xl text-[#F4F7F5]'/>
          <p className='text-gray-200 hidden md:inline-block'>Offerings</p>
        </div></Link>
        <Link to='/gallery'><div className={`${pathname === '/gallery' && 'bg-black rounded-md'} flex items-center gap-2 text-xl hover:border-b-2 p-2 border-[#9B2915]`}>
          <FaImages className='text-base md:text-2xl text-[#F4F7F5]'/>
          <p className='text-gray-200 hidden md:inline-block'>Gallery</p>
        </div></Link>
      </div>
    </div>
  )
}

export default Nav


// 08090A
// 9B2915
// F4F7F5
// 817F75
// 222823