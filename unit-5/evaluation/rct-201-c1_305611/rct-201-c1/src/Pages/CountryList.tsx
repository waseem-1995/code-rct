import React from 'react'
import { CountryDataTypes } from './Countries'
// should receive the countries list data, through the props, to be mapped and rendered

 interface CountryListProps {
  data:CountryDataTypes[];
 }

const CountryList = (props:CountryListProps) => {
  
  return <div>
    {
     props.data.map((el)=>{
      return <div>
        <h2>{el.name}</h2>
        <p>{el.capital}</p>
      </div>
     })
    }
  </div>
}

export default CountryList
