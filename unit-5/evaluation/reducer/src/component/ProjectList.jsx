import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({data}) => {
  return (
    <div className="project-list-wrapper">
       {data.length>0?(
      <table data-testid="project-container">
       
          <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Tech Stack</th>
            <th>Assigned To</th>
            <th>Current Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user,index)=>{
            return(
              <tr>
               <td> <ProjectRow {...user} id={index+1}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      ):(
        <div data-testid="no-project-container">No Project Found</div>
      )}
      
    </div>
  );
};
