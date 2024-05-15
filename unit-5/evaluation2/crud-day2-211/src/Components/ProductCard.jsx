import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductCard = ({image,title,price,discount,gender,brand,id}) => {
  return (
    <DIV>
        <img src={image} alt="pic" />
        <h3>title:{title}</h3>
        <h3>prcie:{price}</h3>
        <p>Brand:{brand}</p>
        <p>Discount{discount}</p>
        <p>category:{gender}</p>
        <button>
          <Link to={`/edit/${id}`}>Edit </Link>
        </button>

    </DIV>
  )
}

const DIV=styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 300px;

  img{
    width: 100%;
    height: 160px;

  }
`
