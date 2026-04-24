import React from "react";

const WindCard = ({ data }) => {
  return (
    <div className="card hover:translate-y-1">
      <div className="card-title">🌬 Wind & Air</div>
      <div className="sub-text">Wind: {data.current.windSpeed} km/h</div>
      <div className="sub-text">
        Rain Chance: {data.hourly.precipitation?.[0]}%
      </div>
    </div>
  );
};

export default WindCard;
