import React from 'react'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import World from "./Pages/World"
import India from "./Pages/India"
import Entertainment from "./Pages/Entertainment"
import Sports from "./Pages/Sports"
import About from "./Pages/About"


function App() {
  return (
    <>
     <BrowserRouter>
     <div className="navi">
     <Navbar/></div>
    <Routes> 
    
      <Route path ="/" element={<Home/>}/>
      <Route path ="/World" element={<World/>}/>
      <Route path ="/India" element={<India/>}/>
      <Route path ="/Entertainment" element={<Entertainment/>}/>
      <Route path ="/Sports" element={<Sports/>}/>
      <Route path ="/About" element={<About/>}/>
      <Route path ="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
