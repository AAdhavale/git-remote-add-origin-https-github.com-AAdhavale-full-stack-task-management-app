import React, { useContext, useState } from 'react'
import './FoodItem.css'
import {assets} from '../../assets/Assets'
import { StoreContext } from '../../context/StoreContex'

const FoodItem = ( {id, name, price, description, image}) => {


  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item' id='food-items'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} />
        {
          !cartItems[id]
              ? <button className="add" onClick={()=>addToCart(id)} >add</button>
              : <div className='food-item-counter'> 
                    <div onClick={() => removeFromCart(id)} className="remove">-</div>
                    <p>{cartItems[id]}</p>
                    <div onClick={() => addToCart(id)} className='addS'>+</div>
                 </div>
                 
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} />
        </div>
        <p className="food-item-des">
            {description}
        </p>
        <p className="food-item-price"> &#8377; {price}</p>
      </div>
    </div>
  )
}

export default FoodItem
