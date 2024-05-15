
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [Movies, setMovies] = useState([]);
  const [val, setVal] = useState('');
  useEffect(() => {
    let timeout = setTimeout(() => {
      fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?q=${val}`).then(e => e.json())
        //.then((res) => {
        //   setMovies(res.data)
       //})
        .then(json => setMovies(json))
        .catch((err) => {
          console.log(err)
        })
    }, 1000)
    return () => clearTimeout(timeout)
  }, [val])
  const handlechange = (e) => {
    setVal(e.target.value)
  }
  console.log(Movies)
  return (
    <div>
      <input
        style={{ padding: "5px", margin: "10px", width: 200 }}
        type="text"
        data-testid="search_key"
        placeholder="Search Movie Username"
        value={val}
        onChange={handlechange}
      />
      <div data-testid="movie_results" >
        {/* Add movie results based of search key here */}
        {Movies && Movies.map((e) => (
          <div key={e.id}>
            <h2>{e.title}</h2>
            <p>{e.year}</p>
          </div>
        ))}
      </div>

    </div>
  )
}