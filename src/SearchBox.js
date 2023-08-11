import React from 'react'

function SearchBox({searchChange}) {
  return (
    <div>
       <input className='input' type='search' placeholder='Search...'  onChange={searchChange}/>
    </div>
  )
}
//dddgi
export default SearchBox