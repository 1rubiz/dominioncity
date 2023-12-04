import React, { useState, useEffect} from 'react'
import Image from '../components/image'
// import img from '/2.png';
import { createClient } from "@supabase/supabase-js";
import Loading from '../components/loading'

function Gallery() {
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [imageUrl, setImageUrl] = useState('logo.jpg')
  const [images, setImages] = useState(null);
  const [errs, setErrs]= useState('')
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
      const getImages= async ()=>{
            const { data, error } = await supabase
            .storage
            .from('gallery')
            .list('media', {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' },
            })
            console.log(data)
            if(error){ setErrs('Error loading images.....Try refreshing')}
            if(data.length > 0){
              console.log(data)
              if(data[0].name[0] === '.'){
                setImages(null)
                setErrs('No New Images....')  
                setLoading(false)
              }else{
                setImages(data);
                setErrs('')
                setLoading(false)
              }
            }else{
              setErrs('No New Images....')
              setLoading(false)
            }
      }
      getImages()
  }, [])
  return (
    <div className='pl-8 w-[100%] pb-9 flex flex-col gap-2 justify-center items-center pt-[25vh] pb-4 md:grid md:grid-cols-3 md:gap-2 bg-[#164863]'>
      {
        loading && <Loading/>
      }
      {(images !== null) && (
          images.map((items, i)=>{
            return(
                <Image key={i} image={items.name}/>
              )
          })
        )}
    </div>
  )
}

export default Gallery