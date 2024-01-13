import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { createClient } from "@supabase/supabase-js";
import Loading from './loading'

export default function Slideshow(){
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const CDNURL = import.meta.env.VITE_CAROUSELURL;

    const [errs, setErrs]= useState('')
  const [loading, setLoading] = useState(false);
	const [num, setNum] = useState(0)
  const [images, setImages] = useState(['/logo.jpg'])
      useEffect(()=>{
        setLoading(true);
        const getImages= async ()=>{
              const { data, error } = await supabase
            .storage
            .from('gallery')
            .list('carousel', {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' },
            })
            if(error){ setErrs('Error loading images.....Try refreshing')}
            if(data.length > 0){
              if(data[0].name[0] === '.'){
                  setLoading(false)
                  return;
                }else{
                  data.map((item)=>{
                    // console.log(item)
                      const newItem = `${CDNURL}${item.name}`; // You can replace this with the actual item you want to add
                      setImages(prevArray => [...prevArray, newItem]);
                  })
                  setErrs('')
                  setLoading(false)
                }
            }
      }
      getImages()
  }, [])

	  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setNum((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
      console.log(images)
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