import React from 'react'

interface CountryInputProps {
  addCountryDetails: (country:string,capital:string) => void;
}
// should receive the addCountryDetails callback function through props
const CountryInput = (props:CountryInputProps) => {
  const[country,setCountry] = React.useState<string>("");
  const[capital,setCapital] = React.useState<string>("");
  // create a form, to take the country, and capital

  const handleCountryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  const handleCapitalChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCapital(e.target.value)
  }

  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault();
   props.addCountryDetails(country,capital)
  }
  return (
    <div>
      <form>
        <input type="text" placeholder='enter country' onChange={handleCountryChange}/>
        <input type="text" placeholder='enter capital' onChange={handleCapitalChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

export default CountryInput
