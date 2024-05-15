import React from 'react'
import { useReducer} from 'react'

const reducer=(state,{type,payload})=>{
    switch(type){
        case "ADD":
            return state+payload;
        case "REDUCE":
            return state-payload;   
        default:
            return state       
    }
}
const initialState=0;

const Counter = () => {
    const [count,dispatch]=useReducer(reducer,initialState);

    const addHandler=()=>{
        dispatch({type:"ADD",payload:1})
    }
    const addReducer=()=>{
        dispatch({type:"REDUCE",payload:1})
    }
  return (
    <div>Counter{count}
    <button onClick={addHandler}>ada</button>
    <button onClick={addReducer}>reduce</button>
    </div>
  )
}

export default Counter