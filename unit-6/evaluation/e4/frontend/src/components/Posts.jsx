import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts,setNotes]=useState("")
    useEffect(()=>{
        fetch("https://misty-clothes-moth.cyclic.app/posts",{
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
    <div>posts</div>
  )
}

export default Posts