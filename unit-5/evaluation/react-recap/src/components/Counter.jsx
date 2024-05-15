import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>counter{count}</h1>
        <button>add</button>
        <button>Reduce</button>
    </div>
    
  )
}

export default Counter