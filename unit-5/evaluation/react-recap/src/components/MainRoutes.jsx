import React from 'react'
import ShowProducts from './ShowProducts'
import AddProducts from './AddProducts'
import Homepage from './Homepage'
import Auth from './Auth'
import{Routes,Route} from "react-router-dom"
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/add" element={<AddProducts/>} />
        <Route path="/show" element={<Auth><ShowProducts/></Auth>}/>
    </Routes>
  )
}

export default MainRoutes