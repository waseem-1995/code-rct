import React ,{useState}from 'react'



const TodoInput = ({addTodos}) => {
    const [text,setText]=useState("")

    const handleAdd=()=>{
        addTodos(text)
        setText("")
    }
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  )
}

export default TodoInput
