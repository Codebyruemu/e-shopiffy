import React from 'react'
import './bestseller.css'
import Card from '../commonfiles/Card'
import all_products from '../../assets/products'

const Bestseller = () => {
  return (
    <div className='new_collections bestseller'>
        <h1>Top Rated pick</h1>
        <p>Curated by our shoppers. Trusted loved and re-ordered again and again</p>
        <div className="collections">
        {all_products.map((card, i)=>{
                  return<Card key={i} 
                  id={card.id} 
                  name={card.name}
                   img={card.img} 
                   new_price={card.new_price}
                old_price={card.old_price}/>
            })}

        </div>
     
    </div>
  )
}

export default Bestseller