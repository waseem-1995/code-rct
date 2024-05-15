import React, { useState } from 'react'
import { Country } from './Countries'

interface CountryInputProps{
  addCountryDetails:(payload:Country)=>void
}

// should receive the addCountryDetails callback function through props
const CountryInput = ({addCountryDetails}:CountryInputProps) => {
  const [countryTitle,setCountryTitle]=useState<string>("")
  const [capital,setCapital]=useState<string>("")

  // create a form, to take the country, and capital

  const handleCountryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCountryTitle(e.target.value)
  }

  const handleCapitalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCapital(e.target.value)
  }

  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(capital.length && countryTitle.length){
      const payload:Country ={id:Date.now(),name:countryTitle,capital}
      addCountryDetails(payload)
      setCountryTitle('')
      setCapital('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={countryTitle} onChange={handleCountryChange}/>
        <input type="text" value={capital} onChange={handleCapitalChange} />
        <button type='submit'>Add country Data</button>
      </form>
    </div>
  )
}

export default CountryInput
