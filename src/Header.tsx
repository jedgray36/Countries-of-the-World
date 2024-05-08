import React, { useEffect, useState } from 'react';
import "./Styles/Header.css"
import { Country } from './Interfaces/Countries';

interface headerProps {
setQuiz: (isActive: boolean) => void;
}

const Header: React.FC<headerProps> = ({setQuiz}) => {
  const [quizState, setQuizState] = useState(false);

  const toggle = () => {
    const newState = !quizState;
    setQuizState(newState);
    setQuiz(newState); 
  }

  return (
    <div className='header'>
      <div className='con'>
      <div className='headerContainer'>
    <div className='appTitle'>{quizState ? "FLAGS OF THE WORLD" : "COUNTRIES OF THE WORLD"}</div>
    </div>
    <div className='sideContainer'>
      <button className="btn btn-active btn-primary buttons-con">Stats</button>
    <button className="btn btn-active btn-primary buttons-con" onClick={() => {toggle()}}>{!quizState ? "🚩 Quiz" : "🌍 Countries"}</button>
      </div>
    </div>
    </div>
  );
}

export default Header;