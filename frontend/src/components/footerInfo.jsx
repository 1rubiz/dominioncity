import { AiFillCopyrightCircle, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from './form'

function FooterInfo() {
  return (
    <footer className='bg-[#08090A] pt-8 text-[#9BBEC8] pb-[19svh] md:pb-[6.3vh] lg:pt-10 flex flex-col lg:flex-row gap-6 items-center'>
        <div className='w-full md:w-[80%] lg:w-[48%] md:p-6'>
            <Form/>
        </div>
        <div className='w-full lg:w-[45%] px-8 lg:px-4'> 
            <div className='w-[100%] text-center flex flex-col gap-2'>
                <p className='flex items-center justify-center gap-3'>
                <FaMapMarkerAlt/> 48, OKUNGBOWA STREET, OFF SILUKO ROAD, OGIDA QUARTERS BENIN CITY.
                </p>
                <p className='flex items-center md:justify-center gap-3'>
                    <AiFillMail/> chapelofdominion2@gmail.com
                </p>
                <p className='flex items-center md:justify-center gap-3'>
                    <AiFillPhone/> +234 806 134 1918
                </p>
            </div>
            <div className='text-center w-full' style={{marginTop: '1rem'}}>
                <p className='flex items-center justify-center gap-3'>Copyright <AiFillCopyrightCircle/> Chapel of Dominion </p>
                <a href='https://1izekorruby.wixsite.com/my-site'><p>Designed & Developed By Rubiz Creation</p></a>
            </div>
        </div>
    </footer>
  )
}

export default FooterInfo
