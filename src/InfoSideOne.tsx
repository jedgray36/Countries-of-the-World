import React from "react";
import "./Styles/Info.css";
import { Country } from "./Interfaces/Countries";

interface InfoOneProps {
  country: Country;
}

const InfoSideOne: React.FC<InfoOneProps> = ({ country }) => {
  return (
    <div className="flexItem">
      <div className="container">
        <div className="contents">
          <div className="card w-96 glass">
            <span style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}>
              <h2 className="card-title">
                {country.name.common.toUpperCase()}
              </h2>
            </span>
            <figure style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={country.flags.svg}
                alt="flag"
                style={{
                  minWidth: "360px",
                  minHeight: "240px",
                  maxWidth: "480px",
                  height: "auto",
                  objectFit: "contain",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="card">
            <h2
              className="card-title"
              style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}
            >
              BIO
            </h2>
            <div className="link">
              {" "}
              <span style={{ color: "white" }}>Maps Link: </span>
              <a
                target="_blank"
                href={country?.maps?.googleMaps}
                rel="noreferrer"
              >
                Map Location
              </a>
            </div>
            <span className="info">Offical Name: {country.name.official}</span>
            <span className="info">Capital: {country?.capital}</span>
            <span className="info">Lat/Lng: {country?.latlng}</span>
            <span className="info">Population: {country?.population}</span>
            <span className="info">Region: {country?.region}</span>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default InfoSideOne;
