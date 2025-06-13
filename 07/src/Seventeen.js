import React, { useEffect, useState } from 'react'

function Seventeen() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4336c6489fb2096713ae1f2b710f6422
                `)
                .then((response) => response.json())
                .then((data) =>setWeather(data))
                .catch((error)=> console.log(error));
            })
        }
    }, []);
    return (
        <div> 
            {weather ? (
                <div>
                    <h1>current Weather</h1>
                    <h3>{weather.name}</h3>
                    <p>Temp: {weather.main.temp} °F</p>
                    <p>Condition: {weather.weather[0].main}</p>
                    <p>wind:   {weather.wind.speed}</p>
                </div>) :
                (
                    <p>Loading....</p>
                )
            }
        </div>
    )
}

export default Seventeen