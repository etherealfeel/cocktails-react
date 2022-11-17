import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Searched from './Searched';
import Home from './Home';
import Drink from './Drink';
import Category from './Category';
import About from './About';

const Pages = () => {
    const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/details/:id' element={<Drink/>}/>
        <Route path='/drinks/:type' element={<Category/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Pages
