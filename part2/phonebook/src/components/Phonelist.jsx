import contactService from '../services/contacts'

const Phonelist = ({persons}) => {
    const handleDelete = (id) => {
        contactService
            .del(id)
            .then(res => console.log('delete user', res))
        // contactService.getAll()
    }
    
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
            {
                persons.map(person =>
                    <div key={person.name}>
                        <li >{person.name} {person.number}</li>
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </div>
                )
            }
            </ul>
        </div>
    )
}

export default Phonelist