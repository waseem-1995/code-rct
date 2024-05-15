import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";


const CounterButtons = () => {
  const {dispatch}=store;

  const handleADD=()=>{
    dispatch(handleAddActionObj(1))
  }

  const handleREDUCE=()=>{
    dispatch(handleReduceActionObj(1))
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleADD}>ADD</button>
      <button data-testid="reduceButton" onClick={handleREDUCE}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
