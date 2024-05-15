import React, { useEffect, useState } from "react";



const Add = () => {
  const [title,setTitle]=useState<string>("");
  const [desc,setDesc]=useState<string>("")

  const handleAddTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }

  const handleDescription=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDesc(e.target.value)
  }

  const todos={
    title,
    desc,
    status:false
  }
  
  const handleForm=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    localStorage.setItem('todos', JSON.stringify(todos));
    setDesc("")
    setTitle("")

  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  return (
    <form data-testid="form" onSubmit={handleForm}>
      <input data-testid="title" type="text" id="title" value={title} onChange={handleAddTitle}/>
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={desc}
        onChange={handleDescription}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
