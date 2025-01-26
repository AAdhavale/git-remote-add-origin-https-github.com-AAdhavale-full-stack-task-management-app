import React, { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import './index.css'
import { Route , Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from "./components/footer/Footer"
import LogingPopup from "./components/loginpopup/LogingPopup"

function App() {

  const[showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LogingPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      
      </div>
      <Footer/>
    </>
  )
}

export default App
