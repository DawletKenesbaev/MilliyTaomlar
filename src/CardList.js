// import React from 'react'
// import { taomlar } from './taomlar'
// import Card from './Card'
// function CardList() {
//   return (
//     <div>{taomlar.map((index,item)=>{
//      <Card key={index}
//       name={item.name} 
//       price={item.price} />
//     })}</div>

//   )
// }

// export default CardList




import React from 'react'
import Card from './Card'

function CardList({taomlar}) {
  return (
    <div className='pa4 cards'>
      {taomlar.map((item, index) => (
        <Card key={index} name={item.name} price={item.price} img={item.url}/>
      ))}
    </div>
  )
}

export default CardList