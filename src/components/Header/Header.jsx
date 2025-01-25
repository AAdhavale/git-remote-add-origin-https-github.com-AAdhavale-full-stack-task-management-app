import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className='header'>
      
      <img src="/header-bg.jpeg" alt="Header Background"/>
        <div className='header-content'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes
                 crafted with the finest ingredients and culinary expertise.
                 our main aim is to satify your cravings and elevate your dining 
                 experience, one delicious meal at a time.
            </p>
            <button>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header
