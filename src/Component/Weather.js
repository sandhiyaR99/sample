import React,{ useRef, useState }  from 'react'

const Weather = () => {
    const [weather, setweather] = useState(null)

    const city = useRef()

    const weatherfunc = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=2957506044647b076e930c09708b9d3f`)
            .then(result => result.json())
            .then(data => setweather(data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <input ref={city}></input>
            <button onClick={weatherfunc}>Get weather details</button>
            {
                weather ?
                    <div>
                        <h1>{weather.weather[0].main}</h1>
                        <h1>{weather.main.temp}</h1>
                    </div> : ""
            }
        </>
    )
}

export default Weather