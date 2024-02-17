import React, { useEffect, useState } from "react";
import { Country } from "./Interfaces/Countries";
import "./Styles/CountriesList.css"




const CountriesList = () => {

    const api = "https://restcountries.com/v3.1/all";

    const [data, setData] = useState<Country[]>([]);


    useEffect(() => {
      const getData = async () => {
        try {
            const countries = await fetch(api);
            const jsonData = await countries.json();
            const sortedData = jsonData.sort((a: any, b: any) => {
              const nameA = a.name.common.toUpperCase();
              const nameB = b.name.common.toUpperCase();
              if (nameA < nameB) {
                  return -1;
              }
              if (nameA > nameB) {
                  return 1;
              }
              return 0;
          });
            setData(sortedData);
            
        } catch(e) {
            console.log(e)
        }
      }
    getData();
    }, [])
    
    
    
      return (
        <div>
          <h3 className="title">Countries</h3>
            {data.map((country: Country) => (
                <div className="country" key={country.name.common}>
                  {country.name.common} - {<img alt="flag" width={25} height={15} src={country.flags.png}/>}
                  </div>
            ))}
        </div>
      );
    }
    
    export default CountriesList;