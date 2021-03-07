import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css'

const CountryDetail = () => {
    const { countryId } = useParams()
    const [country, setCountry] = useState([])

    const { name, flag, capital, region, subregion, population, currencies, borders, languages } = country
    // console.log(country.currencies);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/callingcode/${countryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [])
    return (
        <div className="country-detail">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Currency: {country.currencies?.map(currency => <span> {currency.name}</span>)}</p>
            <p>Languages: {country.languages?.map(language => <span> {language.name}</span>)}</p>
            <p>Border: {country.borders?.map(border => <span> {border}</span>)}</p>

        </div>
    );
};

export default CountryDetail;