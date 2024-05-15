import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
	const data =useSelector((state)=>state.restaurantData);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getRestaurantData())
  },[]);
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				{data && data.map((item,index)=>{
					return(
						<div className="restaurant_item" key={index}>
							<img className="image" alt="img" width="70%" src={item.image} />
							<div className="name">{item.name} </div>
							<div className="type"> {item.type}</div>
							<div className="rating">{item.rating} </div>
							<div className="number_of_votes"> {item.number_of_votes}</div>
				       </div>
					)
				})}
			</div>
		</div>
	);
}
