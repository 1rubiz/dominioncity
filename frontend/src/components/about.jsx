import React from 'react'
import { AiFillEye, AiFillCompass } from 'react-icons/ai'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About(){
	const cards = ' rounded-[20px] m-2'
	return(
		<div className='p-2 bg-[#164863] text-[white] flex flex-col justify-center items-center'>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 2}}
              exit={{opacity: 0}}
              transition={{duration: 1}}
             className='p-6 m-6'
                style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
            >
								<Card className="bg-gray-200">
									<CardHeader>
										<CardTitle className="text-center">WELCOME</CardTitle><hr/>
									</CardHeader>
									<CardContent>
										<p>
											Welcome to Chapel of Dominion ministries digital space; we are a community bound by the
										 love of Christ and dedicated to sharing His message of hope, grace, and
										 redemption. Nestled in the heart of OGIDA QUARTERS, BENIN CITY, our church family extends a heartfelt
										 welcome to all seeking a deeper connection with God and fellow believers.
										</p>
									</CardContent>
								</Card>
            </motion.div>
            <div className='m-3 lg:grid lg:grid-cols-3 gap-3'>
                <motion.div
                  initial={{x: -100}}
                  whileInView={{x: 0}}
                  exit={{x: -100}}
                  transition={{duration: 2}}
                 className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
									<Card className="bg-gray-200">
										<CardHeader>
											<CardTitle className="flex gap-4">OUR VISION <AiFillEye className='icon' /></CardTitle><hr/>
										</CardHeader>
										<CardContent>
											<p>
												To make it right through PRAYERS and the preaching of the WORD of the TRUTH
											</p>
										</CardContent>
									</Card>
                </motion.div>
                <motion.div
                  initial={{opacity: 0}}
                  whileInView={{opacity: 2}}
                  exit={{opacity: 0}}
                  transition={{duration: 2}}
                 className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
									<Card className="bg-gray-200">
										<CardHeader>
											<CardTitle className="flex gap-4">COME JOIN US THIS SUNDAY <AiFillCompass/></CardTitle><hr/>
										</CardHeader>
										<CardContent>
											<p>
												<p><strong>Sundays</strong> (Glorious service) 8am</p>
												<p><strong>Tuesday</strong> (Word@work service) 6:15am - 7:25am</p>
												<p><strong>Fridays</strong> (Divine Intervention Hour) 5pm - 6pm</p>
											</p>
										</CardContent>
									</Card>
                </motion.div>
                <motion.div
                  initial={{x: 20}}
                  whileInView={{x: 0}}
                  exit={{x: 100}}
                  transition={{duration: 2}}
                 className={cards}
                  style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                >
										<Card className="bg-gray-200">
										  <CardHeader>
										    <CardTitle className="flex gap-4">ABOUT US</CardTitle><hr className="font-extrabold"/>
										  </CardHeader>
										  <CardContent>
										    <p>
				                    Experience the joy of worship in our uplifting
				                     services where the Word of God is proclaimed with
				                     passion, and the presence of the Holy Spirit is palpable.
				                     Beyond the sanctuary, discover the warmth of genuine fellowship
				                    through our community events, small groups, and outreach programs.
													</p>
										  </CardContent>
										</Card>
                </motion.div>
            </div>
      </div>
	)
}
