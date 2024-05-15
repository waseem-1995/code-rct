import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = () => {
    const [searchParams,setSearcParams]=useSearchParams()
    const initialCategory=searchParams.getAll("category")
    const [category,setCategory]=useState(initialCategory || [])
    //sorting
    const initialOrder=searchParams.get("order")
    const [order,setOrder]=useState(initialOrder || "")  //to set order
   

    const handleChange=(e)=>{
        let newCategory=[...category]
        const value=e.target.value

        if(newCategory.includes(value)){
            newCategory=newCategory.filter((el)=>el !==value)
        }else{
            newCategory.push(value)
        }

        setCategory(newCategory)
        //console.log(category);
    };

    const handleSort=(e)=>{
      setOrder(e.target.value);
    }

    useEffect(()=>{
        let params={
            category,
        }
        order && (params.order=order)  //if order is present add in paramas same like category added in params
        
        setSearcParams(params)

    },[category,order])

  return (
    <div>
        <h3>Filter By</h3>
        <div>
          <div>
            <input type="checkbox" value={"male"} onChange={handleChange} checked={category.includes("male")} />
            <label>Men</label>
          </div>
           <div>
            <input type="checkbox"  value={"female"} onChange={handleChange} checked={category.includes("female")}/>
            <label>Women</label>
           </div>
           <div>
            <input type="checkbox"  value={"kids"} onChange={handleChange} checked={category.includes("kids")}/>
            <label>kids</label>
           </div>
           <br /><br />
           <h3>sorting</h3>

           <div onChange={handleSort}>
            <input type="radio" value={"asc"} defaultChecked={order==="asc"}/>
            <label>ascending</label>
            <br />
            <input type="radio"  value={"desc"} defaultChecked={order==="desc"}/>
            <label>descending</label>
           </div>
        </div>
    </div>
  )
}
