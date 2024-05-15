import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
	const dispatch=useDispatch()
  const data=useSelector((store)=>store.employeeData )
  useEffect(()=>{
    dispatch(getEmployeeData())
  },[]);
	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{/* Map the below div against yoru employee data */}
				{data && data.map((item,index)=>{
					return(
						<div className="employee" style={{ width: "250px" }} key={index}>
							<img className="image" alt="img" width="70%" src={item.image} />
							<div className="name"> {item.name}</div>
							<div className="gender"> {item.gender}</div>
							<div className="department"> {item.department}</div>
				      </div>
					)
				})}
				
			</div>
		</div>
	);
}
