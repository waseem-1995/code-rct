


import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
const handleAdd=()=>{
    setCounter(prev=>prev+5)
}
const handlered=()=>{
    setCounter(prev=>prev-5)
}
  return (
    <div>

    <h2 data-testId="Counter">Counter:{counter}</h2>
    <button data-testId="Add-Button" onClick={handleAdd}>Add</button>
<button data-testId="Reduce-Button" onClick={handlered}>Reduce</button>
    </div>
  )
}

export default Counter