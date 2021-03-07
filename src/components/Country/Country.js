import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { flag, name, capital, callingCodes } = props.country
    return (
        <div className="countries-container">
            <img src={flag} alt="flag" />
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <Link to={`/country/${callingCodes}`}><button>See More</button></Link>
        </div>
    );
};

export default Country;