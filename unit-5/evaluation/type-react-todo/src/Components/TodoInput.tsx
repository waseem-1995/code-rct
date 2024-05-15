import React, { useState } from 'react'

interface TodoInputProps{
    handleAdd:(title:string)=>void;
}

const TodoInput = (props:TodoInputProps) => {
    const[todoTitle,setTodoTitle]=useState<string>('')

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodoTitle(e.target.value)
    }

    const handleClick=()=>{
        props.handleAdd(todoTitle)
        setTodoTitle('')
    }

  return (
    <div>
      <input placeholder='add todo' value={todoTitle} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput
