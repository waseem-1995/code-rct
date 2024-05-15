import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {useDispatch } from 'react-redux'
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Reduxstroe/Action';
import axios from 'axios'
const Addtodo = () => {
    const [Text,setText]=useState('');
    const dispatch =useDispatch();
    const addTodo=(payload)=>{
        dispatch(addTodoRequest());
        axios.post("http://localhost:8080/Todos",payload)
        .then((r)=>dispatch(addTodoSuccess(r.data)))
        .catch((err)=>dispatch(addTodoFailure(err)))
    }
    const handelAdd=()=>{
        if(Text){
            const payload={id:uuid(),Task:Text,status:false};
            addTodo(payload);
            setText("")
        }
    }
  return (
    <div>
        <h3>Add Todo</h3>
        <input type="text" value={Text} placeholder='Add toodo Here....' 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handelAdd}>Add</button>
    </div>
  )
}

export default Addtodo