import React from 'react'
import { useReducer } from 'react'

const reducer=(state,{type,payload})=>{
    switch(type){
        case"EMAIL":
          return{...state,email:payload};
        case"PASSWORD":
          return{...state,password:payload};
        case"RESET":
            return initialState;  
        default:
          return state;
    }
}

const initialState={
    email:"",
    password:"",
}

const Form = () => {
    const [data,dispatch]=useReducer(reducer,initialState);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch({type:"RESET"})
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='email' value={data.email}
            onChange={(e)=>{dispatch({type:"EMAIL",payload:e.target.value})}}
            />
            <input type="password" placeholder='password' value={data.password}
             onChange={(e)=>{dispatch({type:"PASSWORD",payload:e.target.value})}}
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form