import React, { useState } from 'react'

interface LoginFormProps{
  handleSubmit:(email:string,password:string)=>void
}

// should receive the handleSubmit callback function through props
const LoginForm = (props:LoginFormProps) => {
  const[email,setEmail]=useState<string>('')
  const[password,setPassword]=useState<string>('')
  // create a form, to take the user email, and password

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const{value}=e.target
    setEmail(value)
  }

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const{value}=e.target
    setPassword(value)
  }

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = (e:React.ChangeEvent<HTMLFormElement>):void => {
    e.preventDefault()
    if(email.length && password.length){
      props.handleSubmit(email,password)
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <form onSubmit={handleClick}>
        <label>email</label>
       <input type="text" value={email} name="email" onChange={handleEmailChange}/>
       <label>password</label>
       <input type="password" value={password} name="password" onChange={handlePasswordChange}></input>
       <button type='submit'>sign in</button>
      </form>
      
    </div>
    
  )
}

export default LoginForm
