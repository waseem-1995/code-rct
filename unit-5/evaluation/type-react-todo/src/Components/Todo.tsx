import React, { useEffect, useState } from 'react'
import { addTodo, getTodos } from './api'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

enum TodoStatus{
    PENDING='pending',
    DONE='done'
}

export interface Todo{
    id:number,
    title:string,
    status:TodoStatus
}


const Todo = () => {
    //state management
    const[todos,setTodos]=useState<Todo[]>([])
    //add
    const handleAdd=(title:string)=>{
        const payload:Todo={
            id:Date.now(),
            title,
            status:TodoStatus.PENDING
        }
        addTodo(payload).then(()=>{
          handleGetTodos()
        })
        //setTodos([...todos,payload])
    }
    //delete,toggle
    const deleteTodo=(id:number)=>{
      let newTodos=todos.filter(todo=>todo.id !==id)
      setTodos(newTodos)
    }

    const handleGetTodos=()=>{
      getTodos().then((res)=>{
        setTodos(res)
      })
    }

    useEffect(()=>{
      handleGetTodos()
    },[])

  return (
    <div>
      <TodoInput handleAdd={handleAdd} />
      <TodoList data={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todo
