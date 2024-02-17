import React, { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import Header from './Header';
import FilterBar from './FilterBar';
import InfoSideOne from './InfoSideOne';
import { Country } from './Interfaces/Countries';

const App = () => {
const [filter, setFilter] = useState("");
const [country, setCountry] = useState<Country>();


  return (
    <div className="App">
    <Sidebar setCountry={setCountry} filter={filter}/>
    <div className='page'>
      <Header />
      <div className="mainContent">
        <FilterBar setRegionFilter={setFilter} />
        <div className='leftSide'>
          {country ? <InfoSideOne country={country}/> : ""}
          
          <div/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
