import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";
import { Country } from "./Interfaces/Countries";

interface filterProps {
filter: string
setCountry: (country: Country) => void;
}


const Sidebar: React.FC<filterProps> = ({filter, setCountry}) => {
      return (
        <div className="sidebar">
        <CountriesList setCountry={setCountry} regionFilter={filter} />
        </div>
      );
    }
    
    export default Sidebar;