import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";
import { Country } from "./Interfaces/Countries";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface filterProps {
filter: string;
sort: string;
setCountry: (country: Country) => void;
}


const Sidebar: React.FC<filterProps> = ({filter, sort, setCountry}) => {
      return (
        <div className="sidebar">
          <div className="title">Countries</div>
        <CountriesList setCountry={setCountry}  regionFilter={filter} sort={sort} />
        </div>
      );
    }
    
    export default Sidebar;