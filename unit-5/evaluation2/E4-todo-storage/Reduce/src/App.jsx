import "./App.css";
import { handleIncrement, handleDecrement } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as types from "./Redux/actionTypes"
function App() {
  const counter = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={()=> dispatch(handleIncrement())}>Increment</button>
      <button onClick={()=> dispatch(handleDecrement())}>Decrement</button>
    </div>
  );
}

export default App;
