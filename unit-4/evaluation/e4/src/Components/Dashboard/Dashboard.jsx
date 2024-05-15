
import React, { useState, useEffect } from 'react'
import {Th,Tr,Td,Thead,Tbody,Button,TableContainer,Table,Input} from "@chakra-ui/react"
import axios from 'axios';

//import axios from 'axios';
export default function Dashboard() {

  const [data, setData] = useState([]);
  const [val, setVal] = useState('');
  const [del,setDel]=useState("")

  
  
  useEffect(() => {
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${val}`).then(e => e.json())
        
        .then(json => setData(json))
        .catch((err) => {
          console.log(err)
        })  
  }, [val])
 
  const hDelete=(id)=>{
    axios.delete(`http://localhost:8080/houses${id}`).then((res)=>setDel("success"))
  }
  console.log(data)


  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc" >  Sort by Asc </Button>
          <Button className = "sortByRentDesc"> Sort by Desc </Button>
        </div>

        <Input className = "searchAddress"  placeholder = "Search Data" value={val}
        onChange={event => setVal(event.target.value)} />


        <TableContainer>
          <Table className="table">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Owner's Name</Th>
                <Th>Address</Th>
                <Th>Area Code</Th>
                <Th>Rent</Th>
                <Th>Bachelor Tenants Allowed</Th>
                <Th>Married Tenants Allowed</Th>
              </Tr>
            </Thead>
            <Tbody> 
              {data && data.map((e) => (
                   <Tr className = "houseDetails"  key={e.id}>
                   <Td className = "name" > {e.name}</Td>
                   <Td className = "ownersName" >{e.ownerName}</Td>
                   <Td className = "address" >{e.address}</Td>
                   <Td className = "areaCode" >{e.areaCode}</Td>
                   <Td className = "rent" >{e.rent}</Td>
                   <Td className = "isBachelorAllowed" >{String(e.isBachelorAllowed)}</Td>
                   <Td className = "isMarriedAllowed" >{String(e.isMarriedAllowed)}</Td>
                   <Td className = "delete" onClick={()=>hDelete(data.id)}> Delete </Td>
               </Tr> 
               ))}


            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}
