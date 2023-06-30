import { useState, useEffect } from 'react'

const Weather = ({lon, lat}) => {
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const apiKey = process.env.REACT_APP_API_KEY
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
            
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()

                if (response.ok) {
                    const { main: { temp } } = data
                    const { wind: { speed } } = data
                    setTemp(temp)
                    setWind(speed) 
                } else {
                    // handle api error
                    console.log('Error occurred', data.message);
                }
            } catch (error) {
                console.log('Error has occurred while trying to retrieve weather data', error)
            }
        }

        fetchWeather()
    }, [lon])
    
    return (
        <div>
            {temp !== null ? (
                <p>Current Temperature: {temp} Celsius</p>
            ) : (
                <p>Loading temperature...</p>
            )}
            <br></br>
            {wind !== null ? (
                <p>Current wind speeds: {wind} m/s</p>
            ) : (
                <p>Loading current wind speeds...</p>
            )}
        </div>
    )
}

export default Weather