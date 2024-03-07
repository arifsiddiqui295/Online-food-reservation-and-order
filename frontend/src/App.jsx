import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import SignUp from './Pages/SignUp/SignUp';
import Premium from './Pages/Premium/Premium';
import Sign from './Pages/Sign/Sign';
import Menu from './Pages/Menu/Menu';
import Dish from './Pages/Dish/Dish';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/> 
          <Route path='/Sign' element={<Sign/>}/> 
          <Route path='/SignUp' element={<SignUp/>}/> 
          <Route path='/Premium' element={<Premium/>}/> 
          <Route path='/Menu' element={<Menu/>}/> 
          <Route path='/Dish' element={<Dish/>}/> 
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
