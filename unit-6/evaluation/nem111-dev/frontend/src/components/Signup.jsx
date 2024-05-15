import React, { useState } from 'react'

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [age,setAge]=useState("")

  const handleSubmit=()=>{
      const payload={name,email,pass,age}
      fetch("http://localhost:8080/users/register",{
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
        Age:<input type="text" placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)}/>
        Pass:<input type="password" placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSubmit}>submit</button>
        
    </div>
    </>
    
  )
}

export default Signup