import { FaCopy } from 'react-icons/fa'
import { useState, useEffect } from "react";
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
    <div className='w-full relative min-h-[70vh] pt-24 pb-[10vh] px-4 lg:px-2 flex flex-col lg:flex-row gap-4 items-center flex-wrap'>
      <Toaster/>
      {
        loading && <Loading/>
      }
      <div className='w-full'>
        <h1 className='text-white text-3xl font-bold'>Offering</h1>
      </div>
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        {/* <!-- Card Header --> */}
        <div className="flex items-center bg-gradient-to-r from-[#817F75] to-[#08090A] p-4">
          <img
            src="/UBA-logo-2.gif"
            alt="Bank Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <div className="ml-4 text-white">
            <h3 className="text-lg font-semibold">Bank Name</h3>
            <p className="text-sm font-light">Your Trusted Partner</p>
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="p-6">
          <div className='mb-4'>
            <p className="text-gray-500 text-sm uppercase font-semibold">
              Bank
            </p>
            <h4 className="text-gray-800 text-lg font-medium">XYZ Bank</h4>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm uppercase font-semibold">
              Account Name
            </p>
            <h4 className="text-gray-800 text-lg font-medium">John Doe</h4>
          </div>
          <div className='flex items-center justify-between'>
            <div className="mb-4">
              <p className="text-gray-500 text-sm uppercase font-semibold">
                Account Number
              </p>
              <h4 className="text-gray-800 text-lg font-medium">1234567890</h4>
            </div>
            <FaCopy onClick={()=>copy(1234567)} className='hover:text-[3.5vh] text-[3vh]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments
