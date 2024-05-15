import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addProduct } from '../redux/productsReducer/action';

const initialState={
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:"",
}

export const Admin = () => {
    const [product,setProduct]=useState(initialState);
    const dispatch=useDispatch()

    const handleChange=(e)=>{
       
        const {name,value}=e.target;

        setProduct(prev=>{
            return {...prev, [name]:value}
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(initialState)
    }

  return (
    <DIV>
        <h2>admin page</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={product.image} onChange={(e)=>{handleChange(e)}} name="image" placeholder='image'/>
            <input type="text" value={product.title} onChange={(e)=>{handleChange(e)}} name="title" placeholder='Title'/>
            <input type="number" value={product.price} onChange={(e)=>{handleChange(e)}} name="price" placeholder='price'/>
            <input type="text" value={product.brand} onChange={(e)=>{handleChange(e)}} name="brand" placeholder='Brand'/>
            <input type="number" value={product.discount}onChange={(e)=>{handleChange(e)}} name="discount" placeholder='Discount'/>
            <select name="gender" id="" onChange={(e)=>{handleChange(e)}}>
                <option value="" >Select Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>
            <button type='submit'>ADD products</button>
        </form>
    </DIV>
  )
}

const DIV=styled.div`
    width: 400px;
    margin: 40px auto;
    border :1px solid red;
    padding: 20px;

    input{
        width: 80%;
        height: 30px;
        font-size: 20px;
    }
    button{
        width: 30%;
        height: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    select{
        width: 50%;

    }
`

