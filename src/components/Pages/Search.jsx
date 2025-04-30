import React,{useState,useEffect} from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import all_products from '../../assets/products'
import Card from '../commonfiles/Card'

const Search = () => {
    const[searchParams]=useSearchParams()
    const navigate=useNavigate()
    const categoryQuery=searchParams.get('category')?.toLowerCase() || '';
    const[results, setResult]=useState([])

   useEffect(()=>{
    const filtered=all_products.filter((item)=>
        item.category.toLowerCase()===categoryQuery

    )

    if (filtered.length===0){
        navigate('/')
    }
    else{
        setResult(filtered)
    }
   },[categoryQuery, navigate])

  return (
    <div>


<div className='new_collections'>
        <h1>Search result for '{categoryQuery}'</h1>
       
        
        <div className='collections'>
        {results.map((card)=>{
                  return<Card key={card.id} 
                  id={card.id} 
                  name={card.name} 
                  img={card.img} 
                  new_price={card.new_price} 
                  old_price={card.old_price}/>
            })}

        </div>

    </div>

    </div>
  )
}

export default Search