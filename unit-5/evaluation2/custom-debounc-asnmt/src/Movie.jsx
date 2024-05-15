import React from 'react'
import { useState } from 'react'

const Movie = () => {
  const [searchValue, setSearchValue] = useState("");


  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  return (
   
    <div>
      <input type="text" placeholder='search'
       value={searchValue}
       onChange={handleSearchInputChanges}
        >

      </input>
    </div>
  )
}

export default Movie