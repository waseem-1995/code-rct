import React from 'react'
import { Todo } from './Todo'

interface TodoItemProps{
  todo:Todo
  deleteTodo:(id:number)=>void
}

const TodoItem = (props:TodoItemProps) => {
  return (
    <div>
      <h2>{props.todo.title}</h2>
      <div>{props.todo.status}</div>
      <button onClick={()=>props.deleteTodo(props.todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
