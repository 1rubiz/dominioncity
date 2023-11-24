import React from 'react'
import { AiFillCopyrightCircle, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from './form'

function FooterInfo() {
  return (
    <footer className='bg-[black] text-[#9BBEC8] pb-12 flex flex-col lg:flex-row gap-6 items-center'>
        
        <div className='md:w-[48%] md:p-6'>
            <Form/>
        </div>
        <div className='w-[45%]'>
            <div className='w-[100%] text-center'>
                <p className='flex items-center gap-3'>
                <FaMapMarkerAlt/> 48, OKUNGBOWA STREET, OFF SILUKO ROAD, OGIDA QUARTERS BENIN CITY.
                </p>
                <p className='flex items-center gap-3'>
                    <AiFillMail/> abcedfg@gmail.com
                </p>
                <p className='flex items-center gap-3'>
                    <AiFillPhone/> +123-456-789-0
                </p>
            </div>
            <div className=''>
                <p className='flex items-center gap-3'>Copyright <AiFillCopyrightCircle/> Chapel of Dominion </p>
                <p>Designed & Developed By Rubiz Creation</p>
            </div>
        </div>
    </footer>
  )
}

export default FooterInfo