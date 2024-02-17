import React, { useEffect, useState } from "react";
import { Country } from "./Interfaces/Countries";
import CountriesList from "./CountriesList";
import "./Styles/sidebar.css";




const Sidebar = () => {


      return (
        <div className="sidebar">
        <ul>
        <CountriesList />
        </ul>
       

        </div>
      );
    }
    
    export default Sidebar;