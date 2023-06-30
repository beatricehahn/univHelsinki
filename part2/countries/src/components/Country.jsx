import {useState} from 'react'

const Country = ({key, name, area, capital}) => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }
    
    return (
        <div key={key}>
            <p>{name}</p>
            <button onClick={toggleShow}>Show</button>
            {show && (
                <div>
                    <h5>capital: {capital}</h5>
                    <h5>area: {area}</h5>
                </div>
            )}
        </div>
    )
}

export default Country