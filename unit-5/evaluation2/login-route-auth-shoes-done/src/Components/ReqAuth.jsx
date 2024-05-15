import { useSelector } from "react-redux";
import { Navigate } from "react-router";
//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
  const isauth = useSelector((state)=> state.auth.data.isAuth);
  console.log(isauth);
  if(isauth){
    return children;
  }
  else {return <Navigate to={"/login"} replace={true}/>}
};

export default ReqAuth;
