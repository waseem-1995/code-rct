import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {login} from "../Redux/AuthReducer/action"

// Complete the logic do not remove any data-testid

export const Login = () => {
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("cityslicka")
  const location=useLocation()
  const navigate=useNavigate();

  const dispatch=useDispatch();
  const userData={
    email,
    password,
  }

  const handlelogin=()=>{
    dispatch(login(userData)).then(()=>{
      navigate(location.state,{replace:true});
    });
  }
  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={email}  
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handlelogin}>Log In</button>
    </div>
  );
};
