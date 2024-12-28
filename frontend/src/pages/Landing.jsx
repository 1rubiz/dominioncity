import { useState } from 'react'
import Slideshow from '../components/slideshow'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import Marquee from '../components/marquee'
import Desktop_about from '../components/desktop_about';

export default function Landing() {
	const [display, setDisplay] = useState(false);

	const handleDays = () => {
		setDisplay(!display)
	}

	const button = !display ? (<FaAngleUp />) : (<FaAngleDown />);

	return (
		<div className='relative max-w-[100%] lg:pt-20'>
			<div className='relative w-full h-[50vh] my-4'>
				<Slideshow />
			</div>
			<div className='w-full mb-4 text-[black]' onClick={handleDays}>
				<p className='text-center text-[white] font-semibold md:text-2xl font-serif cursor-pointer flex justify-center items-center gap-6 lg:mb-2'>Days of service {button}</p>
				<Marquee />
				{
					display && (
						<div className='bg-gray-300 text-center flex flex-col gap-3'>
							<p>Sundays (Glorious service) 8am</p><hr className />
							<p>Tuesday (Word@work service) 6:15am - 7:25am</p>
							<p>Fridays (Divine Intervention Hour) 5pm - 6pm</p>
						</div>
					)
				}
			</div>
			{/* <About/> */}
			<Desktop_about />
			{/* <iframe
			width="600"
			height="450"
			style="border:0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/place?key=API_KEY
				&q=Space+Needle,Seattle+WA">
			</iframe> */}
		</div>
	);
}
