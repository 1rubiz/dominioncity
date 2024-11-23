import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Payments from './pages/Payments'
import Media from './pages/Media'
import ErrorPage from './pages/ErrorPage';
// import Home from './pages/Home'

function App() {
  return (
     <BrowserRouter>
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
      </div>
    </BrowserRouter>

  )
}

export default App

// #DDF2FD
// #9BBEC8
// #427D9D
// #164863
