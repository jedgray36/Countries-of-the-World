import React, { useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Sidebar';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
      <div className='title'>Countries of the World</div>
      </div>
    <Sidebar />
    </div>
  );
}

export default App;
