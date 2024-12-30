import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios';
import useLoadingStore from '../store/loading';

export default function Slideshow() {
  const apiUrl = import.meta.env.VITE_API;
  const { start, stop } = useLoadingStore()
  const { toast } = useToast()
  const [num, setNum] = useState(0)
  const [data, setData] = useState([]);

  const getData = async () => {
    // console.log('fetching')
    console.log(`${apiUrl}/api/carousel`);
    start()
    const token = sessionStorage.getItem('token')
    try {
      const response = await axios.get(`${apiUrl}/api/carousel`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      stop()
      toast({
        title: response.data.message,
        variant: 'success'
      })
      console.log(response)
      // console.log(response.data.data[0].carousel)
      setData(response.data.data)
    } catch (err) {
      console.log(err)
      stop()
      toast({
        title: 'Server Error! Please contact the admin',
        variant: 'destructive'
      })
    }
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    if (data.length === 0) return; 

    const interval = setInterval(() => {
      // Move to the next image
      setNum((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
    // console.log(images)
  }, [num, data.length]);


  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
    >
      {
        (data && data.length !== 0) ? data.map((item, i) => {
          if (i === num) {
            return (
              <motion.img
                key={i}
                src={item.imageUrls[0].imageUrl}
                alt={`Slide 1`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="object-contain w-full h-full"
              />
            )
          }
        }) : (
          <div className='w-full h-full flex items-center justify-center'>
            <motion.img
              src='/logo.jpg'
              alt={`Slide 1`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="object-contain w-full xl:w-1/2 h-full"
            />
          </div>
        )
      }
    </div>
  )
}