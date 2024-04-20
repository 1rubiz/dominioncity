import React, {useState} from 'react'
import { FaGlobe, FaAngleDown, FaInstagram, FaWhatsapp, FaYoutube, FaShare } from 'react-icons/fa'
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
    <FaGlobe className='text-[3vh] md:text-[5vh] text-[black]'/>
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
      
      {
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
      {button}
      </motion.div>
    </>
  )
}

export default Footer