const TopAnecdote = ({anecdotes, top, mostVotes}) => {
    // if no top index was found (-1) then render "No top comment"
    if (mostVotes === 0) {
        return <h4>No top anecdote yet!</h4>
    }
    return (
        <div>
            <h2>Top anecdote:</h2>
            <h4>{anecdotes[top]}</h4>
            <p>Top anecdotes's number of votes: {mostVotes}</p>
        </div>
    )
}

export default TopAnecdote