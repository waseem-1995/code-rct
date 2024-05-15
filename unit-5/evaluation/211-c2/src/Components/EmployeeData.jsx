import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const employeeData =useSelector((state)=>state.employeeData);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getEmployeeData())
  },[]);
  console.log(employeeData)
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Employee Data</h2>
      <div className="employee_data"
        style={{display:"flex",gap:"20px",margin:"50px",flexWrap:"wrap"}}
      >
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}

        {employeeData && 
          employeeData.map((item,index)=>{
            return(
              <div key={index} style={{width:"250px"}}>
                <img src={item.image} width="70%" alt="img"/>
                <div>{item.name}</div>
                <div>{item.gender}</div>
                <div>{item.department}</div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}
