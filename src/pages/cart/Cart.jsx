import React from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContex';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, addTocart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartItems[items._id] > 0) {
            return (
              <div>
                <div
                  className="cart-items-title cart-items-item"
                  key={items._id || index} // Added a unique key
                >
                  <div className="food-item-img-container">
                    <img src={items.image} alt={items.name} className="food-item-img" />
                  </div>
                  <p>{items.name}</p>
                  <p> &#8377; {items.price}</p>
                  <p>{cartItems[items._id]}</p>
                  <p> &#8377; {items.price * cartItems[items._id]}</p>
                  <button className='btn' onClick={() => removeFromCart(items._id)}>x</button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div >
            <div className="cart-total details">
              <p>Sub Total</p>
              <p> &#8377; {getTotalCartAmount()}</p>
              <hr/>
            </div>

            <div className="cart-total details">
              <p>Delivery Fee</p>
              <p> &#8377; {getTotalCartAmount()===0?0:60}</p>
              <hr/>
            </div>

            <div className="cart-total details">
              <b>Total</b>
              <b> &#8377; {getTotalCartAmount()===0?0:getTotalCartAmount() + 60}</b>
              <hr/>
            </div>
            

          </div>
          <button onClick={() => navigate('/order')}>Processed to check-Out</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Cart
