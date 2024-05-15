import React from 'react'
import { addCountryDetailsAPI, getCountriesAPI } from '../api'
import CountryInput from './CountryInput'
import CountryList from './CountryList'

export interface CountryDataTypes {
  id: number;
  name: string;
  capital: string;
  }
// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  // have a local state management to store the countries data
  const [data,setData] = React.useState<CountryDataTypes[]>([]);

  //should accept the country to be added, as a parameter
  const addCountryDetails = (country:string,capital:string) => {
     addCountryDetailsAPI(country,capital).then(res => setData([...data,res.data]))
  }

  React.useEffect(()=>{
    // getCountriesAPI().then(res => setData((res.data))
    getCountriesAPI().then((res) => setData(res.data))
  },[])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}
      <CountryInput addCountryDetails={addCountryDetails}/>

      {/* Render CountryList component, with the countries data as props */}
      <CountryList data={data}/>
    </div>
  )
}

export default Countries
