import React from 'react';

const API_key = '54ad394ba74dbdd8bddf5fccc2f59f30';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';



const Form = () => {
    const handleSubmitWeather = (event) => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        fetch(`${baseUrl}${city}&appid=${API_key}&units=metric`)
            .then(response => response.json())
            .then(data =>
                new Object({
                name: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset*1000).toLocaleTimeString("en-US")
            }))
            .then(data => console.log(data));
    }

    return (
        <form onSubmit={handleSubmitWeather}>
            <input type='text' name='city' placeholder='Enter your city'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;