import { useState, useEffect} from 'react'
import Image from '../components/image'
import { createClient } from "@supabase/supabase-js";
import Loading from '../components/loading'
import toast from 'react-hot-toast';
import TaperedCarousel from '../components/taperedCorousel';
import FilterSection from '../components/filter';

function Gallery() {
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [imageUrl, setImageUrl] = useState('logo.jpg')
  // const [images, setImages] = useState(null);
  const [errs, setErrs]= useState('')
  const [loading, setLoading] = useState(false);
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
      <div className="my-2">
        {/* <h1 className="text-2xl font-bold mb-4">Filter Example</h1> */}
        <FilterSection years={years} events={events} onFilterChange={handleFilterChange} />
        {/* Additional content */}
      </div>
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
