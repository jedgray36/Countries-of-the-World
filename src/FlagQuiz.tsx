import React, { useEffect, useState } from 'react';
import "./Styles/Header.css"
import { Country } from './Interfaces/Countries';




const FlagQuiz = () => {

const api = "https://restcountries.com/v3.1/all?fields=flags,name";
const [flags, setFlags] = useState<Country[]>([]);


const getFlags = async () => {
    try {
        const flagData = await fetch(api);
        const JSONdata = await flagData.json();
        setFlags(JSONdata);
        console.log(flags);
    } catch(e) {
        console.log(e);
    }

}

  return (
    <div className='quizContainer'>
        <button onClick={getFlags}>Start</button>
        {flags?.map((flag: Country) => (
            <img alt="flag" width={25} height={15} src={flag.flags.svg}/>
        ))}
    </div>
  );
}

export default FlagQuiz;