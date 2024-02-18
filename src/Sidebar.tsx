import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";
import { Country } from "./Interfaces/Countries";

interface filterProps {
filter: string;
sort: string;
setCountry: (country: Country) => void;
}


const Sidebar: React.FC<filterProps> = ({filter, sort, setCountry}) => {
      return (
        <div className="sidebar">
        <CountriesList setCountry={setCountry}  regionFilter={filter} sort={sort} />
        </div>
      );
    }
    
    export default Sidebar;