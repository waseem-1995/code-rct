import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoffeeData } from '../Redux/AppReducer/action';

export default function CoffeeData() {
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.coffeeData)
  useEffect(()=>{
    dispatch(getCoffeeData())
  },[]);
  console.log(data)
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont"   style={{display:"flex",gap:"20px",margin:"50px",flexWrap:"wrap"}}>
        {/* map the below div against your coffee data */}
        {data && data.map((item,index)=>{
            return(
              <div className = "coffee-item" key={index} style={{width:"250px"}}>
              <img className = "image" alt = "img" width = "70%"src={item.image}/>
              <div className = "title">{item.title} </div>
              <div className = "price"> {item.price}</div>
            </div>
            )
        })}
       
    </div>
   </div>
   
  )
}