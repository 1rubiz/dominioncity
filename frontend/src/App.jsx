import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Landing from './pages/landing'
import Gallery from './pages/Gallery'
import Payments from './pages/Payments'
import ErrorPage from './pages/Errorpage';
import Media from './pages/Media'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <div className='bg-[#164863] h-screen'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/offering' element={<Payments/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/media' element={<Media/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  )
}

export default App

// #DDF2FD
// #9BBEC8
// #427D9D
// #164863