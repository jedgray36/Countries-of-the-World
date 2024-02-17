import React from 'react';
import "./Styles/FilterBar.css";


interface filterProps {
setRegionFilter: (region: string) => void
}



const FilterBar: React.FC<filterProps> = ({setRegionFilter}) => {

const regions = [
"Africa",
"Americas",
"Asia",
"Europe",
"Oceania",
"Antarctic"
]

const getRegion = (region: any) => {
setRegionFilter(region);
}


  return (
    <div className="container">
      <div className='filters'>
        <div className='filter'>
        <span>Filter By Cotinent: </span>
        <select className="select" defaultValue="All" onChange={(e) => getRegion(e.target.value)} aria-label="Default select example">
        <option value="All">All</option>
        {regions.map((region) => (
            <option value={region}>{region}</option>
        ))}
        
        </select>
        </div>
        {/* <div>
            Filter By Population: 
        <select  onChange={(e) => getRegion(e.target.value)} className="select" aria-label="Default select example">
        <option value="All">All</option>
        {regions.map((region) => (
            <option value={region}>{region}</option>
        ))}
        
        </select>
        </div> */}
    </div>
      </div>
  );
}

export default FilterBar;