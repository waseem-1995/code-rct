import React from 'react'

// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  // have a local state management to store the countries data

  //should accept the country to be added, as a parameter
  const addCountryDetails = () => {}

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}

      {/* Render CountryList component, with the countries data as props */}
    </div>
  )
}

export default Countries
