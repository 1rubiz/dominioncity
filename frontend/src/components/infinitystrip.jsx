import React, { useState, useEffect } from 'react'

export default function Infinitystrip({ text }){
	const [position, setPosition] = useState(0)
	useEffect(()=>{
		const interval = setInterval(()=>{
			setPosition((prev)=> (prev + 1) % (text.length * 20));
		}, 30);

		return()=> clearInterval(interval);
	}, [text.length]);

	return(
		<div className='relative overflow-hidden h-[7vh] w-[100%] bg-white hover:bg-gray-300'>
			<div className='absolute whitespace-nowrap text-center text-[3vh] font-semibold'
				style={{ transform: `translateX(${-position + 22}px)`}}>
				<span>{text}</span>
			</div>
		</div>
	)
}