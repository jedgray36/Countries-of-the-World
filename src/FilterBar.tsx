import React from 'react';
import "./Styles/FilterBar.css";
import { regions, sorts } from './Interfaces/Countries';


interface filterProps {
setRegionFilter: (region: string) => void;
setSort: (sort: string) => void;
}

const FilterBar: React.FC<filterProps> = ({setRegionFilter, setSort}) => {

const getRegion = (region: any) => {
setRegionFilter(region);
}

const getSort = (sort: any) => {
  setSort(sort);
  }

  return (
    <div className="container-filter">
      <div className='filters'>
        <div className='filter'>
        <span>Filter By Cotinent: </span>
        <select className="selectFil" defaultValue="All" onChange={(e) => getRegion(e.target.value)}>
        {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
        ))}
        </select>
        </div>
        <div>
            <span>Sort By: </span>
        <select defaultValue="A - Z" onChange={(e) => getSort(e.target.value)} className="selectFil">
        {sorts.map((sort) => (
            <option key={sort} value={sort}>{sort}</option>
        ))}
        </select>
        </div>
    </div>
      </div>
  );
}

export default FilterBar;