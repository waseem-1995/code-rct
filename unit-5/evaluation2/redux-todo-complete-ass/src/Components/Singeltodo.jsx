
import axios from "axios"
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useParams } from 'react-router-dom';
import { ToggleTodoFailure, ToggleTodoRequest, ToggleTodoSuccess } from '../Reduxstroe/Action';
function Singeltodo() {
  const dispatch= useDispatch();



  const todo = useSelector((state)=>state.Todos);
  const { id }= useParams();
  const [CurrentTodo,setCurrentTodo]=useState({});

const togglestatus=(id,newstatus)=>{
  dispatch(ToggleTodoRequest());
  axios.patch(`http://localhost:8080/Todos/${id}`,{status:newstatus})
  .then((r)=>dispatch(ToggleTodoSuccess(r.data)))
  .catch((err)=>dispatch(ToggleTodoFailure(err)))
}
  useEffect(()=>{
  let currentTodo=todo.find((item)=>item.id===id);
  console.log(currentTodo);
  currentTodo && setCurrentTodo(currentTodo);
},[todo,id])


  return (
    <div>
      <h3>
      {CurrentTodo?.Task}
     {CurrentTodo?.status?"True" : "False"}
    </h3>
    <button onClick={()=>togglestatus(CurrentTodo.id,!CurrentTodo.status)}>Toggle Task</button>
    </div>
  )
}

export default Singeltodo