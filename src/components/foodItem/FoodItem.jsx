import React from 'react'
import './FoodItem.css'
import {assets} from '../../assets/Assets'

const FoodItem = ( {id, name, price, description, image}) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p> <center> {name}</center></p>
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
