import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const isauth = useSelector((state)=> state.auth.isauth);
  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {!isauth && (
          <button data-cy="navbar-login-button" onClick={()=> navigate("/login" ,{replace:true})}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
