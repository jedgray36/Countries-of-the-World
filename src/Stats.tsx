import React, { useEffect, useState } from "react";
import "chart.js/auto";
import "./Styles/Stats.css";
import { Country } from "./Interfaces/Countries";
import { Chart, Doughnut } from "react-chartjs-2";
import TableModal from "./TableModal";

interface StatsProps {
  countries: Country[] | undefined;
}

const Stats: React.FC<StatsProps> = ({ countries }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["white", "blue", "black"],
        hoverBackgroundColor: ["grey", "darkblue", "white"],
      },
    ],
  };

  return (
    <>
      <div className="stats">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            Welcome to "Countries of the World! 🌍🚩 Embark on an exciting
            journey around the globe as you explore the flags of different
            countries. This app is designed to help you expand your knowledge of
            world while having fun along the way.
          </div>
        </div>
        {/* <TableModal countries={countries} toggle={modalOpen} onClose={() => setModalOpen(false)}/>
        <div className="split">
        <div className="w-1/4 ...">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
          <Doughnut data={data} />
          </div>
          </div>
        </div>
        <div className="w-3/4 ...">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
          <Chart width="700" height="300" type='line' data={data} />
          </div>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default Stats;
