import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../Countrie/Countrie";

const Countries = () => {
    const [countries , setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            {
                countries.map(countrie => <Countrie countrie = {countrie} key={countrie.ccn3}></Countrie>)
            }
        </div>
    );
};

export default Countries;