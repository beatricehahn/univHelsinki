const Form = (props) => {
    return (
        <div>
            <p>filter shown with 
                <input 
                value={props.search}
                onChange={props.handleSearch}
                placeholder='Search by name'
                />
            </p>
            <form onSubmit={props.addContact}>
                <h2>Add new contact</h2>
                <div>
                    name: 
                    <input 
                        value={props.newName} 
                        onChange={props.handleNameChange}
                        />
                </div>
                <div>
                    contact: 
                    <input 
                        value={props.newNumber} 
                        onChange={props.handleNumberChange}
                    />
                </div>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default Form