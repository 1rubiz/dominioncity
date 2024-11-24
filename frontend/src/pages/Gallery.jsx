/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react'
import Image from '../components/image'
import { createClient } from "@supabase/supabase-js";
import Loading from '../components/loading'
import toast from 'react-hot-toast';
import TaperedCarousel from '../components/taperedCorousel';
import FilterSection from '../components/filter';
import useViewStore from '../store/view';

function Gallery() {
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [imageUrl, setImageUrl] = useState('logo.jpg')
  // const [images, setImages] = useState(null);
  const [errs, setErrs]= useState('')
  const [loading, setLoading] = useState(false);
  const { view } = useViewStore()

  const images = [
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/img.JPG',
      title: 'one'
    },
    {
      image: '/img2.JPG',
      title: 'two'
    },
    {
      image: '/logo.jpg',
      title: 'three'
    },
    {
      image: '/UBA-logo.gif',
      title: 'three'
    },
  ]

  const years = [2020, 2021, 2022, 2023];
  const events = [
    { id: 1, name: "Event A" },
    { id: 2, name: "Event B" },
    { id: 3, name: "Event C" },
  ];
  const handleFilterChange = (filters) => {
    console.log("Filters applied:", filters);
    // Use the `filters` object to query your database
  };

  // useEffect(()=>{
  //   setLoading(true);
  //     const getImages= async ()=>{
  //           const { data, error } = await supabase
  //           .storage
  //           .from('gallery')
  //           .list('media', {
  //             limit: 100,
  //             offset: 0,
  //             sortBy: { column: 'name', order: 'asc' },
  //           })
  //           if(error){
  //             setErrs('Error loading images.....Try refreshing')
  //             console.log(error);
  //             // setLoading(false)
  //             toast.error('Network error')
  //           }
  //           if(data.length > 0){
  //             // console.log(data)
  //             if(data[0].name[0] === '.'){
  //               setImages(null)
  //               setErrs('No New Images....')
  //               setLoading(false)
  //             }else{
  //               setImages(data);
  //               setErrs('')
  //               setLoading(false)
  //             }
  //           }else{
  //             setErrs('No New Images....')
  //             setLoading(false)
  //           }
  //     }
  //     getImages()
  // }, [])
  return (
    <div className='relative px-4 w-[100%] pb-9 pt-20'>
      {
        loading && <Loading/>
      }
      <h1 className='text-white text-3xl font-bold'>Gallery</h1>
      <div className="my-2 md:w-1/2">
        {/* <h1 className="text-2xl font-bold mb-4">Filter Example</h1> */}
        <FilterSection years={years} events={events} onFilterChange={handleFilterChange} />
        {/* Additional content */}
      </div>
      <ImageDisplay imageUrl={view}/>
      <TaperedCarousel items={images}/>
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
        <button onClick={()=> setSize('fill')} className={`text-white border rounded-md px-1 ${imgSize === 'fill' && 'bg-[#222823]'}`}>Stretch</button>
        <button onClick={()=> setSize('contain')} className={`text-white border rounded-md px-1 ${imgSize === 'contain' && 'bg-[#222823]'}`}>Contain</button>
        <button onClick={()=> setSize('cover')} className={`text-white border rounded-md px-1 ${imgSize === 'cover' && 'bg-[#222823]'}`}>Cover</button>
      </div>
    </div>
  );
};
