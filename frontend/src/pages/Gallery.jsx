import React from 'react'
import Image from '../components/image'
import img from '/2.png';

function Gallery() {
  return (
    <div className='pl-8 w-[100%] pb-9 flex flex-col gap-2 justify-center items-center pt-[19vh] pb-4 md:grid md:grid-cols-3 md:gap-2 bg-[#164863]'>
      <Image image={img} customClass=''/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
    </div>
  )
}

export default Gallery