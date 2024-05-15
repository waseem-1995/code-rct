import React from 'react'

// should receive the handleSubmit callback function through props
interface LoginFormProps {
  handleSubmit: (email:string,password:string)=> void;
}
const LoginForm = (props:LoginFormProps) => {
  // create a form, to take the user email, and password
  const[email,setEmail] = React.useState<string>("");
  const[password,setPassword] = React.useState<string>("");

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  //  when the user clicks on the Sign In button
  //  call the handleSubmit function, inside this.
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  props.handleSubmit(email,password)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <form>
        <input type="text" placeholder='enter email' onChange={handleEmailChange}/>
        <input type="text" placeholder='enter password' onChange={handlePasswordChange}/>
        <button onClick={handleClick}>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
