import { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search.component'
import Results from './components/Results.component'

import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState(null)
  // array for search results of countries
  const [results, setResults] = useState([])
  // full set of data
  const [data, setData] = useState([])

  // get all countries info at first render
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setData(response.data))
      .then(console.log(data))
  }, [])

  const handleSearch= (event) => {
    // update searchInput term
    setSearchInput(event.target.value)
 

  }

  useEffect(() => {
    // check if there are any matches
    if (searchInput) {
      const returnedEntries = data.filter(country => {
        return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      })
      setResults(returnedEntries)
    }

    console.log('results: ', results);
    setSearchInput(null)
  }, [searchInput])

  return (
    <>
      <Search handleSearch={handleSearch}/>
      <Results countries={results}/>
    </>
  )
}

export default App
