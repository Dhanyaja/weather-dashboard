import React from "react";

const SunCycleCard = ({ data }) => {
  return (
    <div className="card  hover:translate-y-1">
      <div className="card-title">☀️ Sun Cycle</div>

      <div className="sub-text">
        Sunrise: {new Date(data.sun.sunrise).toLocaleTimeString()}
      </div>
      <div className="sub-text">
        Sunset: {new Date(data.sun.sunset).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default SunCycleCard;
