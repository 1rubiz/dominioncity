import { AiFillCopyrightCircle, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Form from './form'
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import axios from 'axios';
import { useToast } from './ui/use-toast';

function FooterInfo() {
    const { toast } = useToast()
    const apiUrl = import.meta.env.VITE_API;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async () => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (!password || !email) {
            toast({
                title: `All inputs are required`,
                variant: 'destructive'
            })
            return;
        }
        try {
            toast({
                title: 'Loading'
            })
            const response = await axios.post(`${apiUrl}/api/admins/login`, { email, password })
            console.log(response)
            if (response.status === 200) {
                toast({
                    title: 'Successful',
                    variant: 'success'
                })
                sessionStorage.clear()
                localStorage.clear()
                window.location.replace(import.meta.env.VITE_ADMIN_URL);
                // VITE_BASE_URL
            }
        } catch (err) {
            console.log(err)
            if (err.response.status === 401) {
                toast({
                    title: 'Invalid Credentials! You are not an admin',
                    variant: 'destructive'
                })
            } else if (err.response.status === 500) {
                toast({
                    title: `${err.response?.data.error}! pls contact the site owner`,
                    variant: 'destructive'
                })
                return;
            } else {
                toast({
                    title: `${err.response?.data.error}: You are not an admin!!!`,
                    variant: 'destructive'
                })
            }
        }
        // sessionStorage.setItem()
        // sessionStorage.setItem('token', JSON.stringify(response.data.token))
        // navigate('/redirect')
    }
    return (
        <footer className='bg-[#08090A] pt-8 text-[#9BBEC8] pb-[19svh] md:pb-[6.3vh] lg:pt-10 flex flex-col lg:flex-row gap-6 items-center'>
            <div className='w-full md:w-[80%] lg:w-[48%] md:p-6'>
                <Form />
            </div>
            <div className='w-full lg:w-[45%] px-8 lg:px-4'> 
                <div className='w-[100%] text-center flex flex-col gap-2'>
                    <p className='flex items-center justify-center gap-3'>
                        <FaMapMarkerAlt /> 48, OKUNGBOWA STREET, OFF SILUKO ROAD, OGIDA QUARTERS BENIN CITY.
                    </p>
                    <p className='flex items-center md:justify-center gap-3'>
                        <AiFillMail /> chapelofdominion2@gmail.com
                    </p>
                    <p className='flex items-center md:justify-center gap-3'>
                        <AiFillPhone /> +234 806 134 1918
                    </p>
                </div>
                <div className='text-center w-full' style={{ marginTop: '1rem' }}>
                    <p className='flex items-center justify-center gap-3'>Copyright <AiFillCopyrightCircle /> Chapel of Dominion </p>
                    <a href='https://1izekorruby.wixsite.com/my-site'><p>Designed & Developed By Rubiz Creation</p></a>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='my-4'>Admin Login</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Admin login</DialogTitle>
                                <DialogDescription className='text-red-600 font-bold'>
                                    This feature is only available to the admins!
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="name"
                                        type='email'
                                        className="col-span-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Password
                                    </Label>
                                    <Input
                                        id="username"
                                        type='password'
                                        className="col-span-3"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={onSubmit} type="submit">Login</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </footer>
    )
}

export default FooterInfo
