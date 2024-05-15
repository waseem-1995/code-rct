import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export const PrivateRoute = ({children}) => {
  const Auth =useSelector((store)=> store.authReducer.isAuth
  )
  return !Auth?<Navigate to="/login"/> :children

};
