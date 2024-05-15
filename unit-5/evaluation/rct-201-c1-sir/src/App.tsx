import React from 'react'
import { useState } from 'react'
import { loginAPI } from './api'
import Countries from './Pages/Countries'
import LoginForm from './Pages/LoginForm'

export interface LoginPayload{
  email:string
  password:string
}

function App() {
  //have a local state management to store the user authenticated status

  const[isAuth,setIsAuth]=useState<boolean>(false)

  //it should email and password, both of type string as parameters

  const handleSubmit = (email:string,password:string):void => {
    if(email.length && password.length){
      const payload:LoginPayload={
        email,
        password,
      }
      loginAPI(payload).then((res)=>{
        if(res.token.length>0){
          setIsAuth(true)
        } 
      })
    }
  }

  // Render LoginForm page if the user is NOT authenticated, else render Countries page
  // handleSubmit should be passed as a prop to the LoginForm page
  return (
    <>
  {!isAuth ? <LoginForm handleSubmit={handleSubmit}/> : <Countries/>}
  </>
  )
}

export default App
