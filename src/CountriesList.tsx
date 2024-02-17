import React, { useEffect, useState } from "react";

interface Country {
  flags: {
    png: string
  },
  name: {
    common: string
  },
  population: number,
  region: string
}



const CountriesList = () => {

    const api = "https://restcountries.com/v3.1/all";

    const [data, setData] = useState<Country[]>([]);


    useEffect(() => {
      const getData = async () => {
        try {
            const countries = await fetch(api);
            const jsonData = await countries.json();
            setData(jsonData);
            console.log(jsonData);
        } catch(e) {
            console.log(e)
        }
      }
    getData();
    }, [])
    
    
    
      return (
        <div>
            {data.map((country: Country) => (
                <div key={country.name.common}>{country.name.common}</div>
            ))}
        </div>
      );
    }
    
    export default CountriesList;