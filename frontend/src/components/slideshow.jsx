import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

export default function Slideshow({images}){
	const [num, setNum] = useState(0)
	  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setNum((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [num, images.length]);

	return(
		<div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
        >
          {
            images.map((item, i)=>{
              if(i === num){
                return(
                  <motion.img
                    key={i}
                    src={images[num]}
                    alt={`Slide 1`}
                    initial={{opacity: 0}}
                    animate={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                    className="object-contain w-full h-full"
                  />
                  )
              }
            })
          }

        </div>
		)
}