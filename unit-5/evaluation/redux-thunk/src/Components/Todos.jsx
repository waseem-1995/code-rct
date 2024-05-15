import{React,useEffect} from 'react'

import TodoInput from './TodoInput'
import axios from 'axios'
import {  useDispatch,useSelector } from 'react-redux';
import { getTodos,getTodosError,getTodosRequest, getTodosSuccess,postTodosError,postTodosRequest,postTodosSuccess } from '../Redux/action';

const Todos = () => {
    const dispatch=useDispatch();

    const todos=useSelector(store=>store.todos)

    useEffect(()=>{
      dispatch(getTodos)
    },[])
    
  return (
    <div>
      <TodoInput getTodos={getTodos}/>
      {
        todos.length && todos.map((item)=>{
            return(
                <div key={item.id}>
                    {item.title}-{item.status ? "True":"False"}
                </div>
            )
          })
      }
    </div>
  )
}

export default Todos
