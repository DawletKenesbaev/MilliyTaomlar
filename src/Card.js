import React from 'react'
import './card.css'
function Card({name,price,img}) {
  console.log(name);
  return (
    <div className='card bg-near-white tc dib br-4 ma2 shadow-4 grow'>
      <img className='img' src={img}/>
      <h1 className='blue'>{name}</h1>
      <h3 className='gold'>{price}</h3>

    </div>
  )
}

export default Card