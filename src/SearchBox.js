import React from 'react'

function SearchBox({searchChange}) {
  return (
    <div>
       <input className='input' type='search' placeholder='search...'  onChange={searchChange}/>
    </div>
  )
}
//dddgi
export default SearchBox