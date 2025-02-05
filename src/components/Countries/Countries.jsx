import { useEffect } from "react";
import { useState } from "react";
import Countrie from "../Countrie/Countrie";
import './Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [markVisited, setMarkVisited] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const markHandel = (countrie) => {
        const iVisited = [...markVisited, countrie];
        setMarkVisited(iVisited)
        
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <div>
                <h2>Visited Country : {markVisited.length}</h2>
                <ul>
                    {
                        markVisited.map(countrie => <li>{countrie.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries">
            {
                countries.map(countrie => <Countrie
                    countrie = {countrie} 
                    key={countrie.ccn3}
                    markHandel={markHandel}
                    ></Countrie>)
            }
            </div>
        </div>
    );
};

export default Countries;