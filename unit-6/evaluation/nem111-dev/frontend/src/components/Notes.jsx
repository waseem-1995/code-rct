import React, { useEffect, useState } from 'react'

const Notes = () => {
    const [notes,setNotes]=useState("")
    useEffect(()=>{
        fetch("http://localhost:8080/notes",{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")} `
        }
      }).then(res=>res.json())
      .then(
        res=>{
          console.log(res)
      })
      .catch(err=>console.log(err))
  
    },[])
  return (
    <div>Notes</div>
  )
}

export default Notes