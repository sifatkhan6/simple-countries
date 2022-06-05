import React from 'react';
import './Country.css'

const Country = (props) => {

    // console.log(props.country)

    const {name, area, population, region, flags} = props.country

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country name: {name.common}</h2>
            <h4>Region: {region}</h4>
            <h4><small>Area: {area}</small></h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;