// rendered search result component
const SearchResults = ({persons, search}) => {
    const checkName = (name) => name.toLowerCase() === search.toLowerCase()
    // search person by filter, save resulting array in results
    let results = persons.filter(person => checkName(person.name))
    return (
        <div>
        
            {
                results.length > 0 ? search : <p>No results</p>
            }
        </div>
    )
}

export default SearchResults