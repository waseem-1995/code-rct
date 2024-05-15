import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
export const Navbar = () => {
  return (
    <DIV>
        <h1>shopping app</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/edit/:id"}>Edit Products</Link>
    </DIV>
  )
}

const DIV=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid red;
`

