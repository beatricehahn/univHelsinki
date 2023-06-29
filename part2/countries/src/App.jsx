import { useState } from 'react'

import Search from './components/Search.component'

import './App.css'

function App() {
  const [searchInput, setSearchInput] = useState('')

  // update searchInput term
  const handleSearch= (event) => {
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  return (
    <Search handleSearch={handleSearch}/>
  )
}

export default App
