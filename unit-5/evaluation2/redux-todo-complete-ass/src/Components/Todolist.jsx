import React from 'react'
import { Link } from 'react-router-dom'

const Todolist = ({TOdos}) => {
  return (
    <div>{TOdos.map((todo)=>(
        <div key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.Task}</Link>
        </div>
    ))}</div>
  )
}

export default Todolist