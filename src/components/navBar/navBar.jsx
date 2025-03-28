import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/Assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContex';

const NavBar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>

      <Link to='/'>
      <img src={assets.logo} alt='logo' className='logo' />
      </Link>
      
      

      <ul className='navbar-menu'>
        <Link to='/' onClick={ () => setMenu("home")} className= {menu === "home" ? "active" : ""} >home</Link>
        <a href='#explore-menu' onClick={ () => setMenu("menu")} className= {menu === "menu" ? "active" : ""}>menu</a>
       <a href='#food-display' onClick={ () => setMenu("category")} className= {menu === "category" ? "active" : ""} >category</a>
        <a href='footer' onClick={ () => setMenu("contact-us")} className= {menu === "contact-us" ? "active" : ""} >contact us</a>
      </ul>

      <div className='navbar-right' >
        <img src={assets.search} className='s-logo'  />
        <div className='navbar-search-icons'>
          <Link to='/cart'>
          <img src={assets.basket}  className='s-logo' />
          </Link>
          
          <div className={getTotalCartAmount() === 0?"":"dot"}></div>
          
        </div>

        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>

        
    </div>
  )
}

export default NavBar
