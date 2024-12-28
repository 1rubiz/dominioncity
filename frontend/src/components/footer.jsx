import React, {useState} from 'react'
import { FaGlobe, FaFacebook, FaAngleDown, FaInstagram, FaWhatsapp, FaYoutube, FaShare } from 'react-icons/fa'
import { IoClose, IoEarth } from 'react-icons/io5'
import { motion } from 'framer-motion';
import FooterInfo from './footerInfo'

function Footer() {
  const [display, setDisplay] = useState(false);
  const [chat, setChat]= useState(false);

  const handleDisplay = ()=>{
    setDisplay(!display)
    setChat(false)
  }

  const handleChat = ()=>{
    setChat(!chat);
    setDisplay(false)
  }

  const button = display ? (
    <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className=' hover:border-2 hover:border-[#0D1321] rounded-full flex justify-center items-center w-[6vh]'>
      <FaAngleDown className='text-[3vh] md:text-[5vh] text-[black]'/>
    </motion.div>
  ) : (
  <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className='hover:border-2 hover:border-[#0D1321] rounded-full flex justify-center items-center'>
      <IoEarth className='text-3xl text-black'/>
    </motion.div>)
  return (
    <>
          <FooterInfo/>
              <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          exit={{ opacity: 0 }}
          className='fixed bg-white rounded-full bottom-20 right-3 gap-3 flex flex-col justify-evenly items-center p-2 '>
      
      {/* {
        display && (
          <>

     
      <motion.div
      initial={{y: 60}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaInstagram className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/>
      </motion.div>
      <motion.div
      initial={{y: 50}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <a href='http://www.youtube.com/@Dominionchapel-wb5we'><FaYoutube className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/></a>
      </motion.div>
      
      <motion.div
      initial={{y: 30}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
      <a href='https://wa.link/xhvr52'>  <FaWhatsapp className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/></a>
      </motion.div>
     
      </>
        )
      }
      {button} */}
      {button}
      </motion.div>
      {
        display && <Socials setDisplay={setDisplay}/>
      }
    </>
  )
}

export default Footer

const Socials = ({setDisplay})=>{
  return(
    <div className='w-80 h-80 transition ease-in-out duration-800 rounded-full fixed -bottom-12 -right-12 bg-white'>
      <div className='w-full h-full rounded-full relative'>
        <FaFacebook className='text-[#222823] absolute top-12 right-20 hover:text-[3.6vh] hover:text-[blue] text-3xl'/>
        <a href='https://wa.link/xhvr52'>  <FaWhatsapp className='text-[#222823] absolute top-[20%] left-16 hover:text-[3.6vh] hover:text-[blue] text-3xl'/></a>
        <a href='http://www.youtube.com/@Dominionchapel-wb5we'><FaYoutube className='text-[#222823] absolute top-1/2 left-9 hover:text-[3.6vh] hover:text-gray-400 text-3xl'/></a>
        <IoClose onClick={()=> setDisplay(false)} className='text-4xl text-[#222823] absolute bottom-16 right-16'/>
      </div>
    </div>
  )
}