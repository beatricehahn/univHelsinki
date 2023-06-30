import Country from "./Country"
import Weather from "./Weather"

const Results = ({countries}) => {
    
    if (countries.length > 10) {
        return <h3>Specify search</h3>
    } else if (countries.length > 1 && countries.length < 11) {
        return (
            <div>
            <ul>
                {
                    countries.map((country) => 
                        <Country 
                            key={country.t1d} 
                            name={country.name.common} 
                            area={country.area}
                            capital={country.capital}
                        />
                    )
                }
            </ul>
        </div>
        )
    } else if (countries.length === 1) {
        console.log(countries[0].languages);
        return (
            <div>
                <h1>{countries[0].name.common}</h1>

                <p>capital: {countries[0].capital}</p>
                <p>area: {countries[0].area}</p>

                <h4>languages:</h4>
                <ul>
                    {
                        Object.values(countries[0].languages).map((value, index) => (
                            <li key={index}>{value}</li>
                        ))
                    }
                </ul>
                
                <h2>Weather in {countries[0].capital}</h2>
                <Weather lon={countries[0].latlng[1]} lat={countries[0].latlng[0]}/>
            </div>
        )
    }
}

export default Results
