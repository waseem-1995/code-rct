import React, { useState } from 'react'

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [gender,setgender]=useState("")

  const handleSubmit=()=>{
      const payload={email,password}
      fetch("https://misty-clothes-moth.cyclic.app/users/register",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
      }).then(res=>res.json())
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }

  return (
    <>
    <div><h1>Register</h1></div>
    <div>
        Name:<input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
        Email:<input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        gender:<input type="text" placeholder='enter gender' value={gender} onChange={(e)=>setgender(e.target.value)}/>
        Pass:<input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
    </>
  )
}

export default Signup