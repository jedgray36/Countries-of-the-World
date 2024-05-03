import React, { useCallback, useEffect, useState } from 'react';
import "./Styles/FlagQuiz.css"
import { Country } from './Interfaces/Countries';




const FlagQuiz = () => {

const api = "https://restcountries.com/v3.1/all?fields=flags,name";
let [flagsQuiz, setFlagsQuiz] = useState<Country[]>([]);
const [flagsAll, setFlagsAll] = useState<Country[]>([]);
const [start, setStart] = useState(false);
const [points, setPoints] = useState(0);
const [guesses, setGuesses] = useState(1);
const [amount, setAmount] = useState("5");
const [currentIndex, setCurrentIndex] = useState(0);




useEffect(() => {
    const getFlags = async () => {
        try {
            const flagData = await fetch(api);
            const JSONdata = await flagData.json();
            console.log(JSONdata);
            setFlagsAll(JSONdata);
        } catch(e) {
            console.log(e);
        }
    }
    getFlags();
},[])

const getRandomFlags = (flags: Country[], numberOfFlags: number) => {
    const shuffledFlags = flags.sort(() => Math.random() - 0.5);
    setFlagsQuiz(shuffledFlags.slice(0, numberOfFlags))
}


const getRandomOptions = () => {
    const shuffledFlags = flagsAll.sort(() => Math.random() - 0.5);
    const correctIndex = Math.floor(Math.random() * 4);
    const options = shuffledFlags.slice(1, 4).map(flag => flag.name.common);
    options.splice(correctIndex, 0, flagsQuiz[currentIndex].name.common);
    return options;
}


const checkAnswer = (answer: string) => {
    if (answer === flagsQuiz[currentIndex].name.common) {
        setPoints(points + 1);
        displayNextFlag()
    } else {
        displayNextFlag()
    }
    checkFinish()
}

const checkFinish = () => {
    if (guesses === parseInt(amount)) {
        setStart(false)
    }
    setGuesses(guesses + 1);
    console.log(guesses);
}


const setFlagAmount = (amount: string) => {
    setAmount(amount);
}


const displayNextFlag = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % flagsQuiz.length);
  };


  const reset = () => {
    setPoints(0);
    setGuesses(1)
    
  }




  return (
    <div className='quizContainer'>
        <div className='description'>
            <h3>Description</h3>
        <p>- Players are presented with an image of a flag along with multiple-choice options or an input field to enter their answer.</p>
        <p>- They select or input their answer based on their knowledge of flags and countries.</p>
        <p>- After submitting their answer, the game provides feedback on whether their answer was correct or incorrect.</p>

        <div>
        
        {start && <div className='score'>Score: {points + "/" + amount}</div>}
        {!start ? 
        <>
        <span>- How many countries would you like to guess: </span>
        <select className="select" defaultValue={5} onChange={(e) => setFlagAmount(e.target.value)}>
            <option key={1} value={5}>5</option>
            <option key={2} value={10}>10</option>
            <option key={3} value={20}>20</option>
            <option key={4} value={50}>50</option>
            <option key={5} value={100}>100</option>
            <option key={6} value={flagsAll.length}>{flagsAll.length}</option>
        </select>
        <button className='start' onClick={() => {setStart(true); reset(); getRandomFlags(flagsAll, parseInt(amount))}}>Begin</button>
        </>
        : ""}
        </div>
        </div> 
        <div className='game'>
        
        {start ? 
            <>
            <div  className='flagCard'>
            <div className='currentFlag'>
            <img 
            key={flagsQuiz[currentIndex]?.flags.svg} 
            alt="flag" className='flag' 
            src={flagsQuiz[currentIndex]?.flags.svg}/>
            </div>
            <div className='options'>
                {getRandomOptions().map((option, index) => (
            <button key={index} className='option' onClick={() =>checkAnswer(option)}>{option}</button>
            ))}
            </div>
            </div>
            </>
            : ""}
            
            </div>
    </div>
  );
}

export default FlagQuiz;