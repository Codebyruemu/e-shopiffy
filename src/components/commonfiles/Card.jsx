// File: src/components/common/Card.jsx
import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../components/context/CartContext'

// Reusable product card component
const Card = ({ id, name, img, new_price, old_price }) => {
  const { addToCart } = useCart()

  return (
    <div className='container item'>
      <img src={img} alt={name} />
      <p>{name}</p>

      <div className='item-prices'>
        <div className='item-price-new'>${new_price}</div>
        <div className='item-price-old'>${old_price}</div>
      </div>

      <button
        className='btn btn-sm btn-outline-primary mt-3 mx-2'
        onClick={() => addToCart({ id, name, img, new_price, old_price })}
      >
        Add to cart
      </button>

      <Link to={`/product/${id}`}>
        <button className='btn btn-sm btn-outline-primary mt-3'>View</button>
      </Link>
    </div>
  )
}

export default Card
