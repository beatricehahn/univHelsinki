const CurrentAnecdote = (props) => {
    return (
        <div>
            <h2>Anecdote of the day:</h2>
            <h4>{props.anecdotes[props.selected]}</h4>
        </div>
    )
}

export default CurrentAnecdote