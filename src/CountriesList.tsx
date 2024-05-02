import React, { useCallback, useEffect, useState } from "react";
import { Country } from "./Interfaces/Countries";
import "./Styles/CountriesList.css"
import SearchBar from "./SearchBar";


interface filterProps {
regionFilter: string;
sort: string;
setCountry: (country: Country) => void;
}

const CountriesList: React.FC<filterProps> = ({regionFilter, sort, setCountry}) => {

    const api = "https://restcountries.com/v3.1";

    const [data, setData] = useState<Country[]>([]);
    const [searchData, setSearchData] = useState<Country[]>([]);

    const sortData = useCallback((data: any) => {
      return data.slice().sort((a: any, b: any) => {
          const nameA = a.name.common.toUpperCase();
          const nameB = b.name.common.toUpperCase();
          if (sort === "A - Z" || sort === "") {
              return nameA.localeCompare(nameB);
          } else if (sort === "Z - A") {
              return nameB.localeCompare(nameA);
          } else if (sort === "Population, H - L") {
              return b.population - a.population;
          } else if (sort === "Population, L - H") {
              return a.population - b.population;
          }
          return 0;
      });
  }, [sort]);


    useEffect(() => {
      const getData = async () => {
        try {
          let URL = "";
          if (!regionFilter || regionFilter === "All") {
            URL = `${api}/all`
          } else {
            URL = `${api}/region/${regionFilter}`
          }
            const countries = await fetch(URL);
            const jsonData = await countries.json();
            const sortedData = sortData(jsonData);
            console.log(sortedData);
            setData(sortedData);
            setSearchData(sortedData);
        } catch(e) {
            console.log(e)
        }
      };
    getData();
    }, [regionFilter, sort, sortData])
    

  const search = useCallback((query: string) => {
    const searchResults = data.filter((country: Country) => 
    country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(searchResults);
  }, [data]);
    
      return (
        <div>
          <div className="search">
          <SearchBar querySearch={search}/>
          </div>
            {searchData.map((country: Country) => (
                <div className="country"
                 key={country.name.common} 
                 onClick={() => setCountry(country)}>
                  {country.name.common} - {<img className="flag" alt="flag" width={30} height={20} src={country.flags.svg}/>}
                  </div>
            ))}
        </div>
      );
    }
    
    export default CountriesList;