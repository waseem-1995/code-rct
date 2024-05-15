
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/AuthReducer/action';

export const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch();
  const {isAuth}=useSelector((store)=>store.authReducer)
  


  const handleSubmit=(e)=>{
    e.preventDefault()
    const userData={email,password}
    //console.log(userData);
    dispatch(login(userData))
    setEmail("")
    setPassword("")

  }
     
  return (
    <div>
      <h1>user login</h1>
      <h3> {isAuth ? "Login Successful" :"Login to continue"} </h3>
        <form onSubmit={handleSubmit}> 
            <input type="text"  placeholder='emalil'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder='password' 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">login</button>
        </form>

    </div>
  )
}

