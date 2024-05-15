import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");

  const handleSubmit=()=>{
      const payload={email,pass}
      fetch("https://misty-clothes-moth.cyclic.app/users/login",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
      }).then(res=>res.json())
      .then(
        res=>{
          console.log(res)
        localStorage.setItem("token",res.token)
      })
      .catch(err=>console.log(err))
  }

  return (
    <>
    <div><h1>Register</h1></div>
    <div>
        Email:<input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         Pass:<input type="password" placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
    </> 
  )
}

export default Login