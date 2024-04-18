import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from './input'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Loading from '../components/loading';

const Form = () => {
  const [loading, setLoading] = useState(false)
  const form = useRef();
  const navigate = useNavigate();
  const emailbtn = document.querySelector('#emailBtn')
  const sendEmail = (e) => {
    e.preventDefault();
    emailbtn.innerHTML='sending email ........'
    setLoading(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent succesfully...');
              emailbtn.innerHTML='successfully sent!'
          setTimeout(
            setLoading(false)
          , 800);
              emailbtn.innerHTML='Submit'
        },
        (error) => {
          console.log(error.text);
          setLoading(false)
        }
      );

    e.target.reset();
  };


  return (
      <div className='max-h-[100%]'>
      {
          loading && (<div className='fixed z-10 top-0 left-0 w-[100%] h-screen'><Loading/></div>)
        }
      <div id='contact' className='text-[27px] flex justify-center items-center'>Co<span className='border-b-2 border-b-[orange]'>ntact U</span>s <FaMapMarkerAlt className='pl-3'/></div>
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 2}}
          exit={{opacity: 0}}
          transition={{duration: 2}}
          className='flex flex-col justify-center items-center p-5 mb-8'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='lg:block lg:w-[100%]'
              >
               <Toaster/>
                <Input 
                customClass='bg-[#c5fbbd] mb-3 focus:bg-[white] w-[100%] h-[5.5vh]'
                labelText='Email' 
                name='from_name'
                id='from_name'
                placeholder='Full Name'
                labelFor='Name'/>
                      
                <Input 
                customClass='bg-[#c5fbbd] mb-2 focus:bg-[white] w-[100%] h-[5.5vh]'
                labelText='Email'
                name='email'
                id='email'
                placeholder='Email'
                labelFor='Email'/>
                <textarea
                name='message'
                id='message'
                placeholder='Email body....'
                className='w-[100%] min-h-[15vh] pl-3 text-black border-2 border-white'
                />
              <button id='emailBtn' className='bg-[#3E5C76] hover:border-[white] font-bold text-[1.8vh] text-white hover:border-2 w-[25vh] lg:w-[45%] h-[5.5vh]'>Submit</button>
          </form>
          </motion.div>
      </div>
    )
}

export default Form;
