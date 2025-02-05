import { useState } from 'react';
import './Countrie.css'
const Countrie = ({countrie, markHandel}) => {
    
    const [visited , setVisited] = useState(false);

    const clickHandel = () => {
        setVisited(!visited)
    }

    const {name, flags, area, population, cca3 } = countrie
    return (
        <div className={`countrie ${visited && 'visited'}`}>
            <h2 style ={{color: visited ? 'blue' : 'white'}}>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Population : {population} </p>
            <p>Code : {cca3}</p>
            <button onClick={clickHandel}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I already Visit' : 'I have to plane'}</p>
            <button onClick={() => markHandel(countrie)}>Mark Visit</button>
        </div>
    );
};

export default Countrie;