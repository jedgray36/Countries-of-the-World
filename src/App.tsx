import React, { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import Header from './Header';
import FilterBar from './FilterBar';
import InfoSideOne from './InfoSideOne';
import { Country } from './Interfaces/Countries';
import FlagQuiz from './FlagQuiz';
import Stats from './Stats';

const App = () => {
const [filter, setFilter] = useState("");
const [sort, setSort] = useState("");
const [country, setCountry] = useState<Country>();
const [quiz, setQuiz] = useState(false);
const [countrys, setCountries] = useState<Country[]>()

const openQuiz = () => {
  setQuiz(!quiz);
  setCountry(undefined);
}

  return (
    <div className="App">
      {!quiz ? <Sidebar setCountries={setCountries} setCountry={setCountry} filter={filter} sort={sort}/> : ""}
    <div className='page'>
      <Header setQuiz={openQuiz} />
      <div className="mainContent">
          {quiz ?
          <FlagQuiz />
            : ""
          }
          {country ?
          <FilterBar setSort={setSort} setRegionFilter={setFilter} />
          : ""}
          {country ?
          <>
          <InfoSideOne country={country}/> </>
          : 
          " "}
          <Stats countries={countrys} />
    </div>
    </div>
    </div>
  );
}

export default App;
