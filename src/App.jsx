import React from 'react'
import Navbar from './componments/nav bar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place order/PlaceOrder'
import Footer from './componments/Footer/Footer'
const App = () => {
  return (
    <>
     <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
     
    </div>
    <Footer/>
    </>
   
  )
}

export default App
