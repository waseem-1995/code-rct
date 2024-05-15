
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../redux/AuthReducer/action';

export const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch();
  const navigate=useNavigate()
  const location=useLocation()
  const {isAuth}=useSelector((store)=>store.authReducer)
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    const userData={email,password}
    //console.log(userData);
    dispatch(login(userData)).then(()=>{
      navigate(location.state,{replace:true})
    })

    setEmail("")
    setPassword("")

  }
     
  return (
    <DIV isAuth={isAuth}>
      <h1>user login</h1>
      <h3> {isAuth ? "Login Successful" :"Login to continue"} </h3>
        <FORM onSubmit={handleSubmit}> 
            <input type="text"  placeholder='emalil'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder='password' 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">login</button>
        </FORM>

    </DIV>
  )
}

const DIV=styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid green;

  input{
    width: 80%;
    height: 40px;
    font-size: large;
  }
  h3{
    color:${({isAuth})=>isAuth? "green" : "red"}
  }
  button{
    width: 20%;
    height: 35px;
  }
  
`
const FORM=styled.form`
  display: flex;
  flex-direction: column;
`