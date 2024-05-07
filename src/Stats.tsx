import React, { useEffect, useState } from "react";
import CountriesList from "./CountriesList";
import "./Styles/Stats.css"
import { Country } from "./Interfaces/Countries";


interface StatsProps {
    countries: Country[] | undefined;
}


const Stats: React.FC<StatsProps> = ({ countries }) => {
      return (
        <>
        <div className="stats">
        <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <div className="overflow-x-auto">
        {countries && (
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Flag</th>
        <th>Country</th>
        <th>Capital</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {countries.map((countryItem: Country) => (
      <tr>
      <th>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img width={50} height={20} src={countryItem.flags.svg} alt="Avatar" />
            </div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br/>
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
      ))}
    </tbody>
  </table>
)}
</div> 
        </div>
        </div>
        <div className="divider divider-primary">Primary</div>
        <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
        <div className="divider"></div> 
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
        </div>
        </>
      );
    }
    
export default Stats;