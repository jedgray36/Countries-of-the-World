import React from 'react';
import "./Styles/Info.css";
import { Country } from './Interfaces/Countries';


interface InfoOneProps {
country: Country,
}



const InfoSideOne: React.FC<InfoOneProps> = ({country}) => {


  return (

    <div className='flexItem'>
    <div className="container">
        <div className='contents'>
            <div className="card w-96 glass">
              <span>
                <h2 className="card-title">{country.name.common.toUpperCase()}</h2>
                  </span>
            <figure><img src={country.flags.svg} alt="flag"/></figure>
            <div className="card-body">
            
  </div>
</div>
        </div>
      </div>
          <div className="container">
          <div>
              <div className='card'>
              <h2 className="card-title">BIO</h2>
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