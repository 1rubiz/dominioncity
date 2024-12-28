import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Payments from './pages/Payments'
import Media from './pages/Media'
import ErrorPage from './pages/ErrorPage';
import { Toaster } from "@/components/ui/toaster"
import useLoadingStore from './store/loading'
import Loading from './components/loading'
// import Home from './pages/Home'

function App() {
  const { loading } = useLoadingStore()
  return (
     <BrowserRouter>
      {
        loading && <Loading/>
      }
      <div className='bg-[#222823] max-h-screen md:overflow-hidden md:flex'>
        <Nav/>
        <div className='md:w-full md:max-h-screen md:overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/offering' element={<Payments/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/media' element={<Media/>}/>
        </Routes>
        <Footer/>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>

  )
}

export default App

// #DDF2FD
// #9BBEC8
// #427D9D
// #164863
