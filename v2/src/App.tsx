import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import useLoadingStore from './store/loading'
import Loading from './components/loading'
import { Toaster } from "./components/ui/sonner"
import Media from './pages/Media'
import Payments from './pages/Payments'
import Navbar from './components/Navbar'
import Footer from './components/landing/footer'


function App() {
  const { loading } = useLoadingStore();

  return (
    <BrowserRouter>
      {
        loading && <Loading/>
      }
      <div className='w-full h-screen'>
        {/* <NavbarComp/> */}
        <div className='w-full h-screen'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/v2' element={<Home/>}/>
            <Route path='/media' element={<Media/>}/>
            <Route path='/payments' element={<Payments/>}/>
          </Routes>
          <Footer/>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
