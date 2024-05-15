import React, { useState } from "react";

import { store } from "../Redux/store";

const CounterValue = () => {
  const {getState,subscribe}=store;
  const [state,setState]=useState(0)

  const forceState=()=>{
    setState(prev=>prev+1)
  }
  subscribe(()=>{
    forceState()
  })

 

  //const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
