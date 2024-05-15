import React from 'react'
import { loginAPI } from './api'
import Countries from './Pages/Countries'
import LoginForm from './Pages/LoginForm'

function App() {
  //have a local state management to store the user authenticated status
  const[authentication,setAuthentication] = React.useState<boolean>(false)

  //it should email and password, both of type string as parameters
  const handleSubmit = (email:string,password:string) => {
    loginAPI(email,password).then(res => setAuthentication(true))
  }

  // Render LoginForm page if the user is NOT authenticated, else render Countries page
  // handleSubmit should be passed as a prop to the LoginForm page
  return <> {authentication===false ? <LoginForm handleSubmit={handleSubmit}/> : <Countries/>}</>
 
}

export default App
