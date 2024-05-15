import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from './Todo'

interface TodoListProps{
    data:Todo[]
    deleteTodo:(id:number)=>void;
}
const TodoList = (props:TodoListProps) => {
  return (
    <div>
     {
         props.data.map(todo =>{
            return <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo}/>
          })
     }
    </div>
  )
}

export default TodoList
