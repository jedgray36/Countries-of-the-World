import React, { useEffect } from 'react';
import "./Styles/Header.css"
import { Country } from './Interfaces/Countries';


interface headerProps {
setQuiz: (isActive: boolean) => void;
}

const Header: React.FC<headerProps> = ({setQuiz}) => {

  return (
    <div className='header'>
      <div className='con'>
      <div className='headerContainer'>
    <div className='appTitle'>COUNTRIES OF THE WORLD</div>
    </div>
    <div className='sideContainer'>
    <button className='flagButton' onClick={() => {setQuiz(true)}}>Flags Quiz</button>
    </div>
    </div>
    </div>
  );
}

export default Header;