import React, {useState,createContext} from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [token, settoken] = useState("");
 
  const [authState,setAuth] =useState({
    isAuth:false,
    token:null
  })


const loginUser=(token)=>{
        setAuth({
            ...authState,
            isAuth:true,
            token:token
        })
}

const logoutUser=()=>{
        setAuth({
            ...authState,
            isAuth:false,
            token:null
        })
}

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

