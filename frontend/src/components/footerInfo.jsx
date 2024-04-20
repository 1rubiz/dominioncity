import React from 'react'
import { AiFillCopyrightCircle, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from './form'

function FooterInfo() {
  return (
    <footer className='bg-[black] text-[#9BBEC8] pb-12 lg:pb-[6.3vh] lg:pt-10 flex flex-col lg:flex-row gap-6 items-center'>
        <div className='w-[80%] md:w-[48%] md:p-6'>
            <Form/>
        </div>
        <div className='w-[77%] md:w-[45%]'>
            <div className='w-[100%] text-center'>
                <p className='flex items-left gap-3'>
                <FaMapMarkerAlt/> 48, OKUNGBOWA STREET, OFF SILUKO ROAD, OGIDA QUARTERS BENIN CITY.
                </p>
                <p className='flex items-center gap-3'>
                    <AiFillMail/> chapelofdominion2@gmail.com
                </p>
                <p className='flex items-center gap-3'>
                    <AiFillPhone/> +234 806 134 1918
                </p>
            </div>
            <div className=''>
                <p className='flex items-center gap-3'>Copyright <AiFillCopyrightCircle/> Chapel of Dominion </p>
                <a href='https://1izekorruby.wixsite.com/my-site'><p>Designed & Developed By Rubiz Creation</p></a>
            </div>
        </div>
    </footer>
  )
}

export default FooterInfo