import { Routes, Route, useLocation } from 'react-router-dom'
import Searched from './Searched';
import Home from './Home';
import Drink from './Drink';
import Category from './Category';
import About from './About';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/details/:id' element={<Drink/>}/>
        <Route path='/drinks/:type' element={<Category/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
