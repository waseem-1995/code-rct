import React, { useEffect, useState } from 'react'
import { addCountryDetailsAPI,getCountriesAPI } from '../api'
import CountryList from './CountryList'
import CountryInput from './CountryInput'


export interface Country{
  email:string
  password:string
}
// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  // have a local state management to store the countries data
  const [countriesData,setCountriesData]=useState<(Country[])>([])

  const handleGetCountries=()=>{
    getCountriesAPI().then((res)=>{
      setCountriesData(res)
    })
  }

  //should accept the country to be added, as a parameter
  const addCountryDetails = (payload:Country) => {
    addCountryDetailsAPI(payload).then((res)=>{
      handleGetCountries()
    })
  }

  useEffect(()=>{
    handleGetCountries()
  },[])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}
      <CountryInput addCountryDetails={addCountryDetails}/>
      <CountryList countriesData={countriesData} />

      {/* Render CountryList component, with the countries data as props */}
    </div>
  )
}

export default Countries
