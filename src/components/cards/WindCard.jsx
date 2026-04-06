import React from "react";

const WindCard = ({ data }) => {
  return (
    <div className="card bg-card rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover-shadow-blue-500/10 hover:translate-y-1">
      <div className="card-title">🌬 Wind & Air</div>
      <div className="sub-text">Wind: {data.current.windSpeed} km/h</div>
      <div className="sub-text">
        Rain Chance: {data.hourly.precipitation?.[0]}%
      </div>
    </div>
  );
};

export default WindCard;
