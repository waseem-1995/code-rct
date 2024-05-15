
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../Components/PrivateRoute'
import { Admin } from './Admin'
import { EditProducts } from './EditProducts'
import { HomePage } from './HomePage'
import { Login } from './Login'

export const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
    <Route path='/edit/:id' element={<EditProducts/>}/>
    <Route path='*' element={<h1>404 not page not found</h1>}/>
  </Routes>
}

