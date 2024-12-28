import React from 'react'

function Marquee() {
  return (
    <div className="relative overflow-hidden w-full bg-white h-12">
        <div className="absolute inset-0 flex animate-scroll place-self-center">
            <p className="lg:text-xl whitespace-nowrap px-8">
                Sundays (Glorious service) <span className='font-bold'> 8am | </span>Tuesday (Word@work service) <span className='font-bold'>6:15am - 7:25am | </span>Fridays (Divine Intervention Hour) <span className='font-bold'>5pm - 6pm</span>
            </p>
        </div>
        {/* <!-- Optional fading edges --> */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="w-16 h-full bg-gradient-to-r from-white to-transparent absolute left-0"></div>
            <div className="w-16 h-full bg-gradient-to-l from-white to-transparent absolute right-0"></div>
        </div>
    </div>
  )
}

export default Marquee