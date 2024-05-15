import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../Components/ProductList'
import { Sidebar } from '../Components/Sidebar'

export const HomePage = () => {
  return (
    <DIV>
        <div className='sidebar'><Sidebar/></div>
        <div className='productlist'><ProductList/></div>
    </DIV>
  )
}

const DIV=styled.div`
  display: flex;
  .sidebar{
    width: 15%;
    padding-top: 40px;
  }
`