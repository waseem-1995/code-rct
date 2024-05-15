import React, { useEffect } from "react";
import { getRestaurantData } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";

export default function RestaurantData() {
  const restaurantData =useSelector((state)=>state.restaurantData);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getRestaurantData())
  },[]);
  console.log(restaurantData)
  return (
    <div>
      <h2 style={{textAlign:"center"}}> Restaurant Data </h2>
      <div className="restaurant_data"
        style={{display:"flex",gap:"20px",margin:"50px",flexWrap:"wrap"}}
      >
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}

        {restaurantData&& 
         restaurantData.map((item,index)=>{
            return(
              <div key={index} style={{width:"250px"}}>
                <img src={item.image} width="70%" alt="img"/>
                <div>{item.name}</div>
                <div>{item.type}</div>
                <div>{item.rating}</div>
                <div>{item.number_of_votes}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
