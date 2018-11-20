import React from 'react';

const Form = ({ getWeather }) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="city..."></input>
            <input type="text" name="country" placeholder="country..."></input>
            <button>get weather</button>
        </form>
    )
}

export default Form;