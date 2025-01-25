import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/Assets'

const NavBar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo' />
      

      <ul className='navbar-menu'>
        <li onClick={ () => setMenu("home")} className= {menu === "home" ? "active" : ""} >home</li>
        <li onClick={ () => setMenu("menu")} className= {menu === "menu" ? "active" : ""}>menu</li>
       <li onClick={ () => setMenu("category")} className= {menu === "category" ? "active" : ""} >category</li>
        <li onClick={ () => setMenu("contact-us")} className= {menu === "contact-us" ? "active" : ""} >contact us</li>
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
