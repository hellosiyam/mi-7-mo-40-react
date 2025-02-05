import { useState } from 'react';
import './Countrie.css'
const Countrie = ({countrie}) => {

    const [visited , setVisited] = useState(false);

    const clickHandel = () => {
        setVisited(!visited)
    }

    const {name, flags, area, population, cca3 } = countrie
    return (
        <div className='countrie'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Population : {population} </p>
            <p>Code : {cca3}</p>
            <button onClick={clickHandel}>{visited ? 'Visited' : 'Going'}</button>
            <p>
            {visited ? 'I already Visit' : 'I have to plane'}
            </p>
        </div>
    );
};

export default Countrie;