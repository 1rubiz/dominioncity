import React, { useState, useEffect } from 'react'
import Slideshow from '../components/slideshow'
import Infinitystrip from '../components/infinitystrip'
import About from '../components/about'
import Loading from '../components/loading'

export default function Landing(){
	const [display, setDisplay] = useState(false);
	const [loading, setLoading] = useState(true);
	const images = [
			'/img.JPG',
			'/img2.JPG',
			'/img3.JPG',
			'/logo.jpg'
		]
	const handleDays = ()=>{
		setDisplay(!display)
	}
	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false);
		}, 3000)
	}, [])

	 return (
	    <div className='pt-[17vh] md:pt-[12vh]'>
	    	{
	    		loading && <Loading/>
	    	}
	      <div className='relative m-[4%] w-[90%] h-[50vh]'> 
	      	<Slideshow/>
	      </div>
	      <div className='w-[100%] text-[black]' onClick={handleDays}>
	      	<p className='text-center text-[white] font-semibold text-[3.3vh] font-serif'>Days of service</p>
	      	<Infinitystrip text='Sundays (Glorious service) 8am | Tuesday (Word@work service) 6:15am - 7:25am | Fridays (Divine Intervention Hour) 5pm - 6pm '/>
	      	{
	      		display && (
	      				<div className='bg-white text-center flex flex-col gap-3'>
					      	<p>Sundays (Glorious service) 8am</p>
					      	<p>Tuesday (Word@work service) 6:15am - 7:25am</p>
					      	<p>Fridays (Divine Intervention Hour) 5pm - 6pm</p>
					      </div>
	      			)
	      	}
	      </div>
	      <About/>
	    </div>
  );
}