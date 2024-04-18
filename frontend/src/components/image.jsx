import React from 'react'
const CDNURL = import.meta.env.VITE_CDNURL;

function Image({image, customClass}) {
  return (
    <div 
    className='relative w-[90%] h-[100%]  border overflow-hidden'
    style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
    >
        <img
        src={`${CDNURL}${image}`}
        alt=''
        className={`${customClass} w-full h-auto md:h-[300px] object-contain transition-transform transform scale-100 hover:scale-125`}
        />
    </div>
  )
}

export default Image