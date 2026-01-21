import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import NotFound from './pages/notfound/NotFound'
import Counter from './pages/counter/Counter'
import Calculator from './pages/calculator/Calculator'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        
        </Route>

        <Route path="counter" element={<Counter/>} />
        <Route path="calculator" element={<Calculator/>} />
        <Route path='*' element={<NotFound />} />

      </Routes>


      

    </>
  )
}

export default App
