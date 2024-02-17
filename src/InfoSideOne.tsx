import React from 'react';
import "./Styles/Info.css";
import { Country } from './Interfaces/Countries';


interface InfoOneProps {
country: Country,
}



const InfoSideOne: React.FC<InfoOneProps> = ({country}) => {


  return (
    <div className="container">
        <div>
            <div className='card'>
                <div>Country Name: {country.name.common}</div>
                <img alt='flag' src={country.flags.png}/>
                <span>Population: {country.population}</span>
                <span>Region: {country.region}</span>
            </div>
        </div>
      </div>
  );
}

export default InfoSideOne;