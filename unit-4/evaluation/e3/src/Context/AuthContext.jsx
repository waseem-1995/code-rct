import React, { useState } from "react";
export const AuthContext=React.createContext();

function AuthContextProvider({children}) {
    const [state,setState]=useState({isAuth:false,token:null});

    const LoginUser=(token)=>{
        setState({...state,isAuth:true,token})
    }

    const LogoutUser=()=>{
        setState({...state,isAuth:false,token:null})
    }

    return (
        <AuthContext.Provider value={{authState:state,LoginUser,LogoutUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;

