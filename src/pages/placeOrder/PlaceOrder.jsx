import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContex'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>
          Delivery Information
        </p>
        <div className="multi-feilds">
          <input type='text' placeholder='first name' />
          <input type='text' placeholder='last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
      
      <div className="multi-feilds">
        <input type='text' placeholder='City' />
        <input type='text' placeholder='State' />

      </div>
      <div className="multi-fields">
        <input type='text' placeholder='Zipcode' />
        <input type='text' placeholder='Country' />
      </div>

      <input type='text' placeholder='Pin Code' />
      </div>

      <div className='place-order-right'></div>

      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div >
          <div className="cart-total details">
            <p>Sub Total</p>
            <p> &#8377; {getTotalCartAmount()}</p>
            <hr />
          </div>

          <div className="cart-total details">
            <p>Delivery Fee</p>
            <p> &#8377; {60}</p>
            <hr />
          </div>

          <div className="cart-total details">
            <b>Total</b>
            <b> &#8377; {getTotalCartAmount() + 60}</b>
            <hr />
          </div>


        </div>
        <button >Processed to Payment</button>
      </div>


    </form>
  )
}

export default PlaceOrder
