import React from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContex';

const Cart = () => {

  const{cartItems,food_list,removeFromCart,addTocart} = useContext(StoreContext);


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cat-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((items,index) =>
        {
          if(cartItems[items._id]>0)
          {
            return(
              <div className="cart-items-title cart-items-item">
                <p>{items.name}</p>
              </div>
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default Cart
