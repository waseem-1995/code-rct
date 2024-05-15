import React from 'react'
import { Country } from './Countries'
interface CountryProps{
  countriesData:Country[]
}

// should receive the countries list data, through the props, to be mapped and rendered
const CountryList = (props:CountryProps) => {
  return <div>
    {
     props.countriesData.map((el)=>{
      return <div>
        <h2>{el.name}</h2>
        <p>{el.capital}</p>
      </div>
     })
    }
  </div>
}

export default CountryList
