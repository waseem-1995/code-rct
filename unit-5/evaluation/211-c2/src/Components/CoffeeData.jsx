import React, { useEffect } from "react";
import { getCoffeeData } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";


export default function CoffeeData() {
  const coffeeData =useSelector((state)=>state.coffeeData);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCoffeeData())
  },[]);
  console.log(coffeeData)
  
  return (
    <div>
      <h2 style={{textAlign:"center"}}> Coffee Data</h2>
      <div className="coffee_data" 
         style={{display:"flex",gap:"20px",margin:"50px",flexWrap:"wrap"}}
      >
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}


        {coffeeData && 
          coffeeData.map((item,index)=>{
            return(
              <div key={index} style={{width:"250px"}}>
                <img src={item.image} width="70%" alt="img"/>
                <div>{item.title}</div>
                <div>{item.price}</div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}
