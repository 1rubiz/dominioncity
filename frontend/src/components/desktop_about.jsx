import axios from "axios"
import { useState, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast"
import useLoadingStore from "../store/loading"

function Desktop_about() {
    const { start, stop } = useLoadingStore()
    const { toast } = useToast()
    const apiUrl = import.meta.env.VITE_API;
    const [data, setData] = useState(null)

    const getAbout = async () => {
        start()
        try {
            const response = await axios.get(`${apiUrl}/api/about`)
            const data = response.data.data[0]
            // console.log(response)
            // console.log(data)
            stop()
            setData({
                about: data.about,
                vision: data.vision,
                welcome: data.welcome
            })
            if (response.status === 200) {
                toast({
                    title: 'Success',
                    variant: 'success'
                })
            }
        } catch (err) {
            console.log(err)
            toast({
                title: 'Server Error! Please contact the admin',
                variant: 'destructive'
            })
        }
    }

    useEffect(() => {
        getAbout()
    }, [])
    
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* <!-- Header --> */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    About Us
                </h2>

                {/* <!-- Subsections --> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* <!-- Welcome Section --> */}
                    <div className="flex flex-col lg:flex-row items-center">
                        <img
                            src="/bg/one.jpg"
                            alt="Welcome"
                            className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Welcome
                            </h3>
                            <p className="text-gray-600">
                                {
                                    data?.welcome
                                }
                            </p>
                        </div>
                    </div>

                    {/* <!-- Vision Section --> */}
                    <div className="flex flex-col lg:flex-row items-center">
                        <img
                            src="/bg/two.jpg"
                            alt="Vision"
                            className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                        />
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Vision
                            </h3>
                            <p className="text-gray-600">
                                {
                                    data?.vision
                                }
                            </p>
                        </div>
                    </div>

                    {/* <!-- About Section --> */}
                    <div className="flex flex-col lg:flex-row items-center">
                        <img
                            src="/bg/three.jpg"
                            alt="About"
                            className="w-full lg:w-1/3 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-6"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                About
                            </h3>
                            <p className="text-gray-600">
                                {
                                    data?.about
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Desktop_about