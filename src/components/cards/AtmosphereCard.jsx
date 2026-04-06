import React from "react";

const AtmosphereCard = ({ data }) => {
  return (
    <div className="card bg-card rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover-shadow-blue-500/10 hover:translate-y-1">
      <div className="card-title">💧 Atmosphere</div>

      <div className="sub-text">Humidity: {data.hourly.humidity?.[0]}%</div>
      <div className="sub-text">
        Precipitation: {data.hourly.precipitation?.[0]}mm
      </div>
      <div className="sub-text">
        UV Index: 4 (Moderate){" "}
      </div>
    </div>
  );
};

export default AtmosphereCard;
