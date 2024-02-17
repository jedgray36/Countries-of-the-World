import React from 'react';
import "./Styles/Info.css";
import { Country } from './Interfaces/Countries';


interface InfoOneProps {
country: Country,
}



const InfoSideOne: React.FC<InfoOneProps> = ({country}) => {


  return (

    <div className='flex'>
    <div className="container">
        <div>
            <div className='card'>
                <div className='name'>{country.name.common.toUpperCase()}</div>
                <img alt='flag' src={country.flags.svg}/>
            </div>
        </div>
      </div>
          <div className="container">
          <div>
              <div className='card'>
              <div className='name'>BIO</div>
              <div className='link'> Maps Link: <a target='_blank' href={country?.maps?.googleMaps} rel="noreferrer">Map Location</a>
            </div>
              <span className='info'>Offical Name: {country.name.official}</span>
                <span className='info'>Capital: {country?.capital}</span>
                <span className='info'>Lat/Lng: {country?.capitalInfo.latlng}</span>
                  <span className='info'>Population: {country?.population}</span>
                  <span className='info'>Region: {country?.region}</span>
              </div>
          </div>
        </div>
        <div/>
        </div>

  );
}

export default InfoSideOne;