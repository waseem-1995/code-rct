import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singeltodo from '../Components/Singeltodo'
import Homepage from './Homepage'

const Allroute = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/todo/:id" element={<Singeltodo/>}/>
   </Routes>
  )
}

export default Allroute