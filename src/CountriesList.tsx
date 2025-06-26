import React, { useCallback, useEffect, useState } from "react";
import { Country } from "./Interfaces/Countries";
import "./Styles/CountriesList.css";
import SearchBar from "./SearchBar";

interface filterProps {
  regionFilter: string;
  sort: string;
  setCountry: (country: Country) => void;
  setCountries?: (countries: Country[]) => void;
}

const CountriesList: React.FC<filterProps> = ({
  regionFilter,
  sort,
  setCountry,
  setCountries,
}) => {
  const apiBase = "https://restcountries.com/v3.1";

  const [data, setData] = useState<Country[]>([]);
  const [searchData, setSearchData] = useState<Country[]>([]);

  const sortData = useCallback(
    (data: any) => {
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
    },
    [sort]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const fields = "name,flags,population,region,latlng,capital,maps";

        const URL =
          !regionFilter || regionFilter === "All"
            ? `${apiBase}/all?fields=${fields}`
            : `${apiBase}/region/${regionFilter}?fields=${fields}`;

        const res = await fetch(URL);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const jsonData = await res.json();
        const sortedData = sortData(jsonData);

        setData(sortedData);
        setSearchData(sortedData);
        setCountries?.(sortedData);
      } catch (e) {
        console.error("Failed to fetch countries:", e);
      }
    };

    getData();
  }, [regionFilter, setCountries, sort, sortData]);

  const search = useCallback(
    (query: string) => {
      const searchResults = data.filter((country: Country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setSearchData(searchResults);
    },
    [data]
  );

  return (
    <div>
      <div className="search">
        <SearchBar querySearch={search} />
      </div>
      {searchData.map((country: Country) => (
        <div
          className="country"
          key={country.name.common}
          onClick={() => setCountry(country)}
        >
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            style={{ width: "32px", height: "20px", marginRight: "8px" }}
          />
          {country.name.common}
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
