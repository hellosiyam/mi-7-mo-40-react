import './Countrie.css'
const Countrie = ({countrie}) => {
    console.log(countrie);
    
    const {name, flags, area, population } = countrie
    return (
        <div className='countrie'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Population : {population} </p>
        </div>
    );
};

export default Countrie;