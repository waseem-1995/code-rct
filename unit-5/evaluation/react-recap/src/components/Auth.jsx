import React from 'react'
import { useState } from 'react'

const Auth = ({children}) => {
    const [auth]=useState(true)
   if(auth){
    return children
   }else{
    return <h1>login</h1>
   }
}

export default Auth