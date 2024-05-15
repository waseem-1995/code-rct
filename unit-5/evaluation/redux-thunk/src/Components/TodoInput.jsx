import React ,{useState}from 'react'
import axios from 'axios';
import {  useDispatch } from 'react-redux';
import { postTodosError,postTodosRequest,dispatch} from '../Redux/action';





const TodoInput = ({getTodos}) => {
  const dispatch=useDispatch();
  const [title,setTitle]=useState("")

  const changeHandler=(e)=>{
    setTitle(e.target.value)
  }

  const addTodos=()=>{
    if(title){
        const payload={
            title,
            status:false,
        }
        dispatch(postTodosRequest())
        return axios.post("http://localhost:8080/todos",payload)
        .catch(e=>{
          dispatch(postTodosError())
        })
    }
  }

  const handleAdd=()=>{
    addTodos().then(()=>{
      setTitle("")
      dispatch(getTodos)
    });
  }
  return (
    <div>
      <input type="text" value={title} onChange={changeHandler}/>
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  )
}

export default TodoInput
