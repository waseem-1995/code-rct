import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProduct } from '../redux/productsReducer/action';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const [searchParams]=useSearchParams()
    const dispatch=useDispatch();
    const location=useLocation()
    const products=useSelector((store)=>store.productReducer.products)

    console.log(searchParams.getAll("category"))
    
    let obj={
      params:{
        gender:searchParams.getAll("category")
      }
    }

    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search])
  return (
    <DIV>
        {products.length>0 && products.map((el)=>{
            return<ProductCard key={el.id} {...el}/>
        })}
        
        
    </DIV>
  )
}

const DIV=styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin: 40px auto;
  margin-left: 30px;
`
