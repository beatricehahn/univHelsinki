import { useState } from 'react'
import Phonelist from './components/Phonelist'
import SearchResults from './components/SearchResults'
import Form from './components/Form'

import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '111-222-3333', id: 1 },
    { name: 'Ada Wang', number: '111-222-3333', id: 2 },
    { name: 'Leon Kennedy', number: '111-222-3333', id: 3 },
    { name: 'Mary Poppins', number: '111-222-3333', id: 4 }
  ])
  // this state controls form input element
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    // if person's name already exists, return an alert
    const checkName = (person) => {
      return person.name === newName
    }
    const foundPerson = persons.find(checkName)

    if (foundPerson) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  // search field handler
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <SearchResults 
        persons={persons} 
        search={search} 
        handleSearch={handleSearch}
      />

      <Form
        addContact={addContact}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange }
      />

      <Phonelist persons={persons}/>
    </div>
  )
}

export default App
