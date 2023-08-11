import React, { useState } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { taomlar } from './taomlar'

function App() {
  const [searchField,setSearchField]= useState('')
  const onSearchChange = (e)=>{
    setSearchField(e.target.value)
   } 
  const Filtered = taomlar.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase())
   })
  return (
    <div className='tc mauto'>
      <div className='parentBox '>
        <h1 className='mt2 mb4  blue'>Milliy Taomlar</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <CardList taomlar={Filtered} />
    </div>
  )
}

export default App