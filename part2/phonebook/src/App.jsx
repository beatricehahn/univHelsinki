import { useState, useEffect } from 'react'

import Phonelist from './components/Phonelist'
import SearchResults from './components/SearchResults'
import Form from './components/Form'
import Notification from './components/Notification'

import contactService from './services/contacts'

import './App.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)

  // fetch mock server data and set persons info
  useEffect(() => {
    contactService
      .getAll()
      .then(res => {
        setPersons(res.data)
      })
  }, [])

  // re-render everytime persons updates
  useEffect(() => {
    contactService
      .getAll()
  }, [persons])

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

    let oldNumber = ''
    let id = 0

    // if person's name already exists, return an alert
    const checkName = (person) => {
      if (person.name === newName) {
        oldNumber = person.number
        id = person.id
      }

      return person.name === newName
    }

    const foundPerson = persons.find(checkName)

    if (foundPerson) {
      // check if new number is a match to the phone number on record
      if (newNumber === oldNumber) {
        alert(`${newName} is already added to the phonebook`)
      } else {
        if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
          //setNewNumber(newNumber)
          
          contactService
            .update(id, personObject)
            .then((personObject) => {
              setPersons(persons.map(person => person.number != oldNumber ? person : personObject))
            })
          oldNumber = '' // reset old

          setMessage('Updated phone number')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }
      }
    } else {
      // send new contact info to backend
      contactService
        .create(personObject)
        .then(() => setPersons(persons.concat(personObject)))

      setMessage('Added new contact')
      setTimeout(() => {
        setMessage(null)
      }, 4000)
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

      <Notification message={message} />

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
