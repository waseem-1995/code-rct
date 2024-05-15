import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter]=useState<number>(Number(localStorage.getItem('counter')) || 0);

  const handleIncrement=():void=>{
    setCounter(counter+1);
    
  }

  const handleDecrement=()=>{
    setCounter(counter-1);
  }

  const handleIncrementfive=()=>{
    setCounter(counter+5);
  }

  const handleDecrementfive=()=>{
    setCounter(counter-5);
  }

  useEffect(()=>{
    localStorage.setItem("counter",JSON.stringify(counter))
  },[counter])


  return (
    
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="increment" onClick={handleIncrement}>Increment</button>
      <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
      <button data-testid="increment5" onClick={handleIncrementfive}>Increment 5 times</button>
      <button data-testid="decrement5" onClick={handleDecrementfive}>Decrement 5 times</button>
    </div>
  );
}

export default App;
