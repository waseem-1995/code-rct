
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)
  const {LoginUser,authState}=useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true)
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    })
    .then(res=>res.json())
    .then(res=>{if(res.token){
     LoginUser(res.token)
     navigate("/dashboard")
    }
   })
   .catch(err=>{
     console.log(err)
   })
 }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)} 
             />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit"  onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
