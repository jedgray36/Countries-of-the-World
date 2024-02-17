import React, { useEffect, useState } from "react";
import { Country } from "./Interfaces/Countries";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";




const Sidebar = () => {
      return (
        <div className="sidebar">
        <CountriesList />
        </div>
      );
    }
    
    export default Sidebar;