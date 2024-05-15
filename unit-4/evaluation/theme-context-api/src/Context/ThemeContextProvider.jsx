import React from 'react'
import App from '../App'
import { createContext,useState } from 'react'

export const ThemeContext= createContext();

export default function ThemeContextProvider({children}) {
  const [isDarkTheme,setIsDarkTheme]=useState("light")
  const toggleTheme=()=>{
    setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light");

  }
  return (
    <ThemeContextProvider.Provider value={{theme,toggleTheme}} >
      <App />
    </ThemeContextProvider.Provider >  
  )
}
uth