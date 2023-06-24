import { useState } from 'react'
import Phonelist from './components/Phonelist'

import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])

  // this state controls form input element
  const [newName, setNewName] = useState(
    ''
  )

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
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
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phonelist persons={persons}/>
    </div>
  )
}

export default App
