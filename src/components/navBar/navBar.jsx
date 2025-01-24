import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/Assets'

const NavBar = () => {

  const [category, setCategory] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo' />
      

      <ul className='navbar-menu'>
        <li onClick={ () => setCategory("home")} className= {category === "home" ? "active" : ""} >home</li>
        <li onClick={ () => setCategory("category")} className= {category === "category" ? "active" : ""} >category</li>
        <li onClick={ () => setCategory("contact-us")} className= {category === "contact-us" ? "active" : ""} >contact us</li>
      </ul>

      <div className='navbar-right' >
        <img src={assets.search} className='s-logo'  />
        <div className='navbar-search-icons'>
          <img src={assets.basket}  className='s-logo' />
          <div className='dot'></div>
          
        </div>

        <button>sign in</button>
      </div>

        
    </div>
  )
}

export default NavBar
