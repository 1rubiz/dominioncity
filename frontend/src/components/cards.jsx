const [offering, setOffering] = useState(false);
  const [tithe, setTithe] = useState(false)
  const [donation, setDonation] = useState(false);

  const handleOffering = ()=>{
    setOffering(!offering)
  }

  const handleTithe = ()=>{
    setTithe(!tithe)
  }

  const handleDonation = ()=>{
    setDonation(!donation)
  }


<div className='p-2 pt-[20vh] grid grid-cols-1 md:grid-cols-3 w-full'>
<div className='relative w-full h-[200px]' onMouseEnter={()=>handleOffering(true)} onMouseLeave={()=>handleOffering(false)}>
  {
    offering ? (
      <motion.div 
      initial={{opacity : 0}}
      animate={{opacity: 2}}
      exit={{opacity: 0}}
      transition={{duration: 4}}
      className='bg-[blue] absolute top-0 left-0 w-full h-[400px]'>Blue</motion.div>
    ):(
      <motion.div 
      initial={{opacity : 0}}
      animate={{opacity: 2}}
      exit={{opacity: 0}}
      transition={{duration: 4}}
      className='bg-[red] absolute top-0 left-0 w-full h-full '>Red</motion.div>
    )
  }
</div>
<div className='relative w-full h-[200px]' onMouseEnter={()=>handleTithe(true)} onMouseLeave={()=>handleTithe(false)}>
  {
    tithe ? (
      <motion.div 
      initial={{opacity : 0}}
      animate={{opacity: 2}}
      exit={{opacity: 0}}
      transition={{duration: 4}}
      className='bg-[orange] absolute top-0 left-0 w-full h-full'>Blue</motion.div>
    ):(
      <motion.div 
      initial={{opacity : 0}}
      animate={{opacity: 2}}
      exit={{opacity: 0}}
      transition={{duration: 4}}
      className='bg-[lime] absolute top-0 left-0 w-full h-full'>Red</motion.div>
    )
  }
</div>
<div className='relative w-full h-[200px]' onMouseEnter={()=>handleDonation(true)} onMouseLeave={()=>handleDonation(false)}>
  {
    donation ? (
      <div className='bg-[purple] absolute top-0 left-0 w-full h-full'>Blue</div>
    ):(
      <div className='bg-[teal] absolute top-0 left-0 w-full h-full'>Red</div>
    )
  }
</div>
</div>
