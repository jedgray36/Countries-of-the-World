import React, { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import Header from './Header';
import FilterBar from './FilterBar';

const App = () => {
const [filter, setFilter] = useState("");
  return (
    <div className="App">
    <Sidebar filter={filter}/>
    <div className='page'>
      <Header />
      <div className="mainContent">
        <FilterBar setRegionFilter={setFilter} />
    </div>
    </div>
    </div>
  );
}

export default App;
