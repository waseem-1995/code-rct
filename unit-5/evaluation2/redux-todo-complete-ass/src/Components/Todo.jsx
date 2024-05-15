import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getTodoFailure, getTodoRequest, getTodoSuccess } from '../Reduxstroe/Action'
import Addtodo from './Addtodo'
import Todolist from './Todolist'
const Todo = () => {
  const dispatch=useDispatch()
 const getTodo=()=>{
  dispatch(getTodoRequest());
  axios.get("http://localhost:8080/Todos")
  .then((r)=>dispatch(getTodoSuccess(r.data)))
  .catch((err)=>dispatch(getTodoFailure(err)))
 };

 useEffect(()=>{
  getTodo()
 },[])
 const todos=useSelector((state)=>(state.Todos))
  return (
    <div>
      <Addtodo/>
      <Todolist TOdos={todos}/>
    </div>
  )
}

export default Todo