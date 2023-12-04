import React from 'react'
// import img from '/img.JPG'
import { AiFillEye, AiFillCompass } from 'react-icons/ai'

export default function About(){
	const cards = 'p-6 rounded-[20px] m-2'
	return(
		<div className='p-2 bg-[#164863] text-[#9BBEC8] flex flex-col justify-center items-center'>
            <div className='p-6 m-6'
                style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
            >
                <h1 className='flex justify-center items-center gap-3 bg-[#427D9D] text-[3vh] text-white font-semibold font-serif'>WELCOME</h1>
                <p>
                  Welcome to Chapel of Dominion ministries digital space; we are a community bound by the
                 love of Christ and dedicated to sharing His message of hope, grace, and
                 redemption. Nestled in the heart of OGIDA QUARTERS, BENIN CITY, our church family extends a heartfelt
                 welcome to all seeking a deeper connection with God and fellow believers.
                </p>
            </div>
            <div className='m-6 lg:grid lg:grid-cols-3 gap-7'>
                <div className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
                  <h1 className='flex justify-center items-center gap-3 bg-[#427D9D] text-[3vh] text-white font-semibold font-serif'>OUR VISION <AiFillEye className='icon' /></h1>
                  <p>
                    To make it right through PRAYERS and the preaching of the WORD of the TRUTH 
                  </p>
                </div>
                <div className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
                  <h1 className='flex justify-center items-center gap-3 bg-[#427D9D] text-[3vh] text-white font-semibold font-serif'>COME JOIN US THIS SUNDAY <AiFillCompass/></h1>
                  <p className='text-[2.3vh]'>
                    <p><strong>Sundays</strong> (Glorious service) 8am</p>
                    <p><strong>Tuesday</strong> (Word@work service) 6:15am - 7:25am</p>
                    <p><strong>Fridays</strong> (Divine Intervention Hour) 5pm - 6pm</p>  
                  </p>
                </div>
                <div className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
                    <h1 className='flex justify-center items-center gap-3 bg-[#427D9D] text-[3vh] text-white font-semibold font-serif'>ABOUT US</h1>
                    <p>
                    Experience the joy of worship in our uplifting
                     services where the Word of God is proclaimed with
                     passion, and the presence of the Holy Spirit is palpable.
                     Beyond the sanctuary, discover the warmth of genuine fellowship 
                    through our community events, small groups, and outreach programs.
                    <img alt='' className='thumb'/>
                    </p>
                </div>
            </div>
      </div>
	)
}