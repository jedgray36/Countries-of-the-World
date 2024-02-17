import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";

interface filterProps {
filter: string

}


const Sidebar: React.FC<filterProps> = ({filter}) => {
      return (
        <div className="sidebar">
        <CountriesList regionFilter={filter} />
        </div>
      );
    }
    
    export default Sidebar;