import { FaCopy } from 'react-icons/fa'
import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../components/loading'

function Payments() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 1000)
	}, [])

  const copy = async (value)=>{
    try {
      await navigator.clipboard.writeText(value)
      toast.success('Account number copied to clipboard') 
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='relative min-h-[70vh] bg-[#164863] pb-[10vh]'>
        <Toaster/>
        {
	    		loading && <Loading/>
	    	}
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center pt-[20vh] lg:pt-[10vh]'>
          <div className='bg-white w-[90%] md:w-[40%]'>
            <p className='text-center text-[3vh] font-bold font-serif'>Tithe & Offering</p>
            <div className='relative w-[100%] h-[40svh] bg-black'>
              <div className='thumbnail w-[100%] h-[70%]'>

              </div>
              <div className='absolute bottom-2 text-[2.2vh] pl-2 font-medium text-white'>
              <span className='font-serif font-bold'>First bank</span>
                <p>Account Name - Dominion Chapel</p>
                <span className='flex items-center gap-6 font-bold'>
                Account No - 123456789012  
                <FaCopy onClick={()=>copy(1234567)} className='text-[3vh]'/>
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white w-[90%] md:w-[40%]'>
            <p className='text-center text-[3vh] font-bold font-serif'>Donations</p>
            <div className='relative w-[100%] h-[40svh] bg-black'>
              <div className='thumbnail2 w-[100%] h-[70%]'>
              </div>
              <div className='absolute bottom-2 text-[2.2vh] pl-2 font-medium text-white'>
                <span className='font-serif font-bold'>Zenieth bank</span>
                <p>Account Name - Dominion Chapel</p>
                <span className='flex items-center gap-6 font-bold'>
                Account No - 123456789012  
                <FaCopy onClick={()=>copy(1234567)} className='text-[3vh]'/>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payments
