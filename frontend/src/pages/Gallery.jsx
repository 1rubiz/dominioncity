/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
// import Image from '../components/image'
// import { createClient } from "@supabase/supabase-js";
// import Loading from '../components/loading'
// import toast from 'react-hot-toast';
import TaperedCarousel from '../components/taperedCorousel';
import FilterSection from '../components/filter';
import useViewStore from '../store/view';
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast"
import useLoadingStore from '../store/loading';

function Gallery() {
  const apiUrl = import.meta.env.VITE_API;
  const { toast } = useToast()
  const { start, stop } = useLoadingStore()
  // const [imageUrl, setImageUrl] = useState('logo.jpg')
  const [selectedEvent, setSelectedEvent] = useState('')
  // const [errs, setErrs]= useState('')
  const [data, setData] = useState([])
  const [collections, setCollections] = useState([])
  const { view } = useViewStore()

  const filterData = async (val) => {
    start()
    // const token = sessionStorage.getItem('token')
    try {
      const formData = new FormData();
      console.log(val)
      formData.append('collectionName', val)
      const response = await axios.post(`${apiUrl}/api/gallery/filter`, { val })
      toast({
        title: 'Successful',
        variant: 'success'
      })
      // console.log(response)
      stop()
      setData(response.data.imageUrls)
    } catch (err) {
      if (err.response?.status === 401) {
        // setTimeout(()=>{
        // 		sessionStorage.clear()
        // 	window.location.replace(home);
        // }, 3000)
        toast({
          title: 'Unauthorized: You are being logged out',
          variant: 'destructive'
        })
      } else {
        toast({
          title: 'Failed to fetch data, check your connection',
          variant: 'destructive'
        })
      } 

    }
  }

  const getCollections = async () => {
    start()
    const token = sessionStorage.getItem('token')
    try {
      const response = await axios.get(`${apiUrl}/api/gallery/collections`,
        {
          headers: {
            Authorization: token
          }
        }				
      )
      stop()
      // console.log(response)
      if (response.status === 200) {
        toast({
          title: 'Fetched collections',
          variant: 'success'
        })
        if (response.data) {
          setCollections(response.data)	
        }
      }
    } catch (err) {
      toast({
        title: 'Server Error! Please contact the admin',
        variant: 'destructive'
      })
    }
  }

  useEffect(() => {
    // getData()
    getCollections()
  }, [])

  useEffect(() => {
    if (selectedEvent === '' || selectedEvent === 'new') {
      setData([])
      return;
    } else {
      filterData(selectedEvent)
    }
  }, [selectedEvent])

  return (
    <div className='relative px-4 w-[100%] pb-9 pt-20'>
      <h1 className='text-white text-3xl font-bold'>Gallery</h1>
      <div className="my-2 md:w-1/2">
        {/* <h1 className="text-2xl font-bold mb-4">Filter Example</h1> */}
        <FilterSection events={collections} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
        {/* Additional content */}
      </div>
      <ImageDisplay imageUrl={view} />
      <TaperedCarousel items={data} />
      {/* {(images !== null) && (
          images.map((items, i)=>{
            return(
                <Image key={i} image={items.name}/>
              )
          })
        )} */}
    </div>
  )
}

export default Gallery

const ImageDisplay = ({ imageUrl }) => {
  const [imgSize, setSize] = useState('cover')
  return (
    <div className="relative w-full lg:w-1/2 h-64 overflow-hidden bg-gray-100 rounded-lg flex justify-center items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Selected"
          className={`object-${imgSize} w-full h-full`}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-300 flex justify-center items-center text-gray-600 font-semibold text-xl">
          No Image Selected
        </div>
      )}
      {!imageUrl && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-30"></div>
      )}
      <div className='text-xs flex flex-col absolute top-1/4 right-2 gap-4'>
        <button onClick={() => setSize('fill')} className={`text-white border rounded-md px-1 ${imgSize === 'fill' && 'bg-[#222823]'}`}>Stretch</button>
        <button onClick={() => setSize('contain')} className={`text-white border rounded-md px-1 ${imgSize === 'contain' && 'bg-[#222823]'}`}>Contain</button>
        <button onClick={() => setSize('cover')} className={`text-white border rounded-md px-1 ${imgSize === 'cover' && 'bg-[#222823]'}`}>Cover</button>
      </div>
    </div>
  );
};
