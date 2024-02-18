import React, { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import Header from './Header';
import FilterBar from './FilterBar';
import InfoSideOne from './InfoSideOne';
import { Country } from './Interfaces/Countries';
import FlagQuiz from './FlagQuiz';

const App = () => {
const [filter, setFilter] = useState("");
const [sort, setSort] = useState("");
const [country, setCountry] = useState<Country>();
const [quiz, setQuiz] = useState(false);

  return (
    <div className="App">
    <Sidebar setCountry={setCountry} filter={filter} sort={sort}/>
    <div className='page'>
      <Header setQuiz={setQuiz} />
      <div className="mainContent">

          {quiz && !country ?
          <FlagQuiz />
            : ""
          }

          {country ?
          <>
          <FilterBar setSort={setSort} setRegionFilter={setFilter} />
          <InfoSideOne country={country}/> </>
          : 
          <div className='noSelect'>Select a Country to see information</div>}
    </div>
    </div>
    </div>
  );
}

export default App;
