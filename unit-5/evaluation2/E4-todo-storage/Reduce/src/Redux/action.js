
import * as types from "./actionTypes"

export const handleDecrement=()=>{

  return {type:types.DECREMENT, payload:2}
}

export const handleIncrement=()=>{
  return{type:types.INCREMENT, payload:3}
}