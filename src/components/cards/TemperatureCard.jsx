import React from "react";

const TemperatureCard = ({ data, unit, selectedDay, selectedDate }) => {
  if (!data) return null;

  const min = selectedDay?.tempMin ?? data.temperature.min ?? 0;
  const max = selectedDay?.tempMax ?? data.temperature.max ?? 0;

  const convertTemp = (temp) => {
    if (temp === undefined || temp === null) return 0;
    return unit === "F" ? (temp * 9) / 5 + 32 : temp;
  };

  return (
    <div className="card hover:translate-y-1">
      <div className="card-title">🌡 Temperature</div>
      <div className="metric-value">
        {convertTemp(data.current.temperature).toFixed(1)}°{unit} Now
      </div>
      <div className="sub-text">
        Min: {convertTemp(min).toFixed(1)}° <br />
        Max: {convertTemp(max).toFixed(1)}°
      </div>
    </div>
  );
};

export default TemperatureCard;
