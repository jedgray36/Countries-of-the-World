import React, { useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const App = () => {

  return (
    <div className="App">
    <Sidebar />
    <div className='page'>
      <Header />
      <MainContent />
    </div>
    </div>
  );
}

export default App;
