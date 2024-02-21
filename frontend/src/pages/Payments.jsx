import { motion } from 'framer-motion'
// import donate from '../assets/img1.jpg'
import { FaCreditCard } from 'react-icons/fa'
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
// import img from '../assets/img5.jpg'
// import logo from '/logo.jpg'

function Payments() {

  const publicKey = "pk_test_32b249e416818f500de8009ac50e29976a45cab8"
//   const amount = 924
    const [email, setEmail] = useState("")
    const [amounts, setAmount] = useState(0);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errs, setErrs] = useState('')
  const [choice, setChoice]= useState('');
  const [choiceErr, setChoiceErr] = useState('')
  const navigate = useNavigate();
  const success =async ()=>{
    navigate('/');
  }



  const handleClick = ()=>{
    if (!email[0] || (amount < 1) || !name[0] || !phone[0]){
      setErrs('All inputs are required *')
    }
    if(choice === ''){
      setChoiceErr('Select a payment choice*')
    }
  }
  const handleChoice=(e)=>{
    setChoiceErr('')
    setChoice(e.target.id)
  }
  let amount = amounts * 100;
// <PaystackButton {...componentProps} className='btn'/>
  // const button = (email ? (<button className='' onClick={handleClick}> Donates</button>) : )

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Make Offerings",
    onSuccess: () =>
      success(),
    onClose: () => alert("Wait! Don't leave :("),
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target)
  }

      // <div className='hidden lg:block absolute top-0 right-0 h-screen w-[48%]'>
      //   <div className='w-[100%] h-[100%] relative flex justify-center items-center'>
      //     <img src={img} className='hidden lg:block opacity-50 absolute top-0 right-0 h-screen w-[100%] z-0'/>
      //     <img src={logo} className='w-[48%] opacity-90'/>
      //   </div>
      // </div>  
  return (
    <div className='max-h-screen pt-[25vh] min-h-[70vh] flex flex-col-reverse gap-5 md:gap-6'>
    {/*  <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      src={donate} 
      alt='' 
      className='h-screen lg:hidden w-[100%] lg:absolute opacity-30 top-0 right-0 lg:w-[47%]'/>
      */}
      <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 2}}
      className='h-[290px] md:h-[300px] top-[25vh] w-[88%] z-3 md:absolute ml-[6%] flex justify-center items-center lg:right-16 md:w-[40%] md:right-[10vh]'
      style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
      >
        <div
        className='w-[80%]'
        >
        <input
        className='p-3 w-[100%] h-[6vh] md:h-[3vh] lg:h-[6vh] mb-2 text-[16px]'
        placeholder="FULL NAME"
        type="text"
        id="name"
        onChange={(e) => {setName(e.target.value); setErrs('')}}
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
        className='p-3 w-[100%] h-[6vh] md:h-[3vh] lg:h-[6vh] mb-2'
        placeholder="EMAIL ADDRESS"
        type="text"
        id="email"
        onChange={(e) => {setEmail(e.target.value); setErrs('')}}
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
          className='p-3 w-[100%] h-[6vh] md:h-[3vh] lg:h-[6vh] mb-2'
          placeholder="PHONE NUMBER"
          type="number"
          id="phone"
          onChange={(e) => {setPhone(e.target.value); setErrs('')}}
        />
        <input
          className='p-3 w-[100%] h-[6vh] md:h-[3vh] lg:h-[6vh] mb-2'
          placeholder="AMOUNT"
          type="number"
          id="amount"
          onChange={(e) => {setAmount(e.target.value); setErrs('')}}
        />
        <p className='text-[red] text-[1.8vh] bg-white font-semibold'>{errs}</p>
        <motion.li className='flex justify-center gap-[5%] items-center bottom-7 list-none p-3 text-[16px] text-[white] left-[30%] bg-[rgb(0,128,0)] rounded-[9px]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
        <button className={`${(!email[0] || (amount < 1) || !name[0] || !phone[0]) ? 'block text-gray-400' : 'hidden'}`} onClick={handleClick}> Make Offerings</button>
        <span className={`${(email[0] && (amount > 0) && name[0] && phone[0]) ? 'block' : 'hidden'}`}><PaystackButton {...componentProps} className={`${(email[0] !== null) ? 'block' : 'hidden'} btn`}/></span>
        <FaCreditCard/>
        </motion.li>
        </div>
      </motion.div>

            <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 2}}
      className='h-[150px] md:h-[300px] md:top-[25vh] w-[88%] z-3 md:absolute ml-[6%] flex justify-center items-center lg:left-0 md:w-[40%]'
      style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
      >
        <div
        className='w-[80%]'
        >
        <form onSubmit={handleSubmit}>
        <p className='text-[grey]'>Select Your Payment*</p>
        <label htmlFor='offering' className='text-[#DDF2FD] flex gap-3 justify-left items-center'>        
        <input
        className='h-[2vh]'
        type="checkbox"
        id="offering"
        checked={choice === 'offering'}
        onChange={handleChoice}
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        Offering</label>

        <label htmlFor='tithe' className='text-[#DDF2FD] flex gap-3 justify-left items-center'>
        <input
          className='h-[2vh]'
          placeholder="PHONE NUMBER"
          type="checkbox"
          id="tithe"
          checked={choice === 'tithe'}
          onChange={handleChoice}
        />TITHE</label>

        <label htmlFor='donation' className='text-[#DDF2FD] flex gap-3 justify-left items-center'>
        <input
          className='h-[2vh]'
          placeholder="AMOUNT"
          type="checkbox"
          id="donation"
          checked={choice === 'donation'}
          onChange={handleChoice}
        />DONATIONS</label>
        <p className='text-[red] text-[1.8vh] bg-white font-semibold'>{choiceErr}</p>
{/*        <motion.li className='flex justify-center gap-[5%] items-center bottom-7 list-none p-3 text-[16px] text-[white] left-[30%] bg-[rgb(0,128,0)] rounded-[9px] w-[70%]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
        <button className={`${(!email[0] || (amount < 1) || !name[0] || !phone[0]) ? 'block' : 'hidden'}`} onClick={handleClick}> Choose </button>
        </motion.li>*/}
        </form>
        </div>
      </motion.div>
      </div>
  )
}

export default Payments
