import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { editProduct } from '../redux/productsReducer/action'

export const EditProducts = () => {
  const {id}=useParams()//to get id
  const product=useSelector((store)=>store.productReducer.products)//get data
  console.log(product);
  const [ediData,setEditData]=useState("") //data  tobe edited will store in it
  const [success,setSuccess]=useState(false)

  const dispatch=useDispatch()

  const handleChange=(e)=>{
    const {name,value}=e.target;
    //console.log(name,value);
    setEditData(prev =>{
      return {...prev,[name]:value}
    })
  }

  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editProduct(ediData,id)).then(()=>{
      setSuccess(true)
    })
   
  }

  useEffect(()=>{
    const data=product.find((el)=> el.id=== +id)
    //console.log(data)
    //console.log(id);
    setEditData(data)
  },[])
  return (
    <DIV>
      <h1>edit products {id}</h1>
      <h3>{success && "product edit Successfull"}</h3>
      <form onSubmit={handleEdit}>
         <input type="text" value={ediData.image} name={"image"} onChange={handleChange}/> 
        <input type="text" value={ediData.title} name={"title"} onChange={handleChange}/>
        <input type="number" value={ediData.price} name={"price"} onChange={handleChange}/>
        <input type="text" value={ediData.brand} name={"brand"} onChange={handleChange}/>
        <input type="number" value={ediData.discount} name={"discount"} onChange={handleChange}/>
        <select name="gender" value={ediData.gender} onChange={handleChange}>
            <option value="" >Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
        </select>
       <button>edit</button>
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



