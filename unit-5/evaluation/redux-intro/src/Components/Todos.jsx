import{React,useEffect} from 'react'

import TodoInput from './TodoInput'
import axios from 'axios'
import { shallowEqual, useDispatch,useSelector } from 'react-redux';
import { getTodosError,getTodosRequest, getTodosSuccess,postTodosError,postTodosRequest,postTodosSuccess } from '../Redux/action';

const Todos = () => {
    const {todos}=useSelector((state)=>{
        return{
            todos:state.todos
        }
    },shallowEqual)
    const dispatch=useDispatch();

    const getTodos=()=>{
        dispatch(getTodosRequest())
        axios.get("  http://localhost:8080/todos").then((r)=>{dispatch(getTodosSuccess(r.data))}).catch((e)=>{dispatch(getTodosError())})
    }

    const addTodos=(title)=>{
        if(title){
            const payload={
                title,
                status:false,
            }
        }
        dispatch(postTodosRequest())
        axios.post("http://localhost:8080/todos",payload).then(r=>{dispatch(postTodosSuccess(r.data))}).catch(e=>{dispatch(postTodosError())})
    }

    useEffect(()=>{
        getTodos()
    },[])
    
  return (
    <div>
      <TodoInput addTodos={addTodos}/>
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
