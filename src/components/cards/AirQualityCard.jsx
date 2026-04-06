const AirQualityCard = ({ data }) => {
  const getAQIColor = (value) => {
    if (value <= 50) return "text-green-400";
    if (value <= 100) return "text-yellow-400";
    if (value <= 150) return "text-orange-400";
    return "text-red-400";
  };

  return (
    <div className="card bg-card rounded-xl p-4 flex flex-col h-full">
      <div className="card-title">🌫 Air Quality</div>

      <div
        className={`font-semibold text-sm mb-2 ${getAQIColor(
          data.hourly.pm10?.[0],
        )}`}
      >
        Moderate
      </div>

      <div className="space-y-2 text-sm overflow-y-auto pr-1 max-h-[60px]">
        <div className="flex justify-between">
          <span className="text-textSecondary">PM2.5</span>
          <span>
            {data.hourly.pm25?.[0] != null ? (
              `${data.hourly.pm25[0]} µg/m³`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-textSecondary">PM10</span>
          <span>
            {data.hourly.pm10?.[0] != null ? (
              `${data.hourly.pm10[0]} µg/m³`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-textSecondary">CO</span>
          <span>
            {data.hourly.carbon_monoxide?.[0] != null ? (
              `${data.hourly.carbon_monoxide[0]} ppm`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-textSecondary">CO₂</span>
          <span>
            {data.hourly.carbon_dioxide?.[0] != null ? (
              `${data.hourly.carbon_dioxide[0]} ppm`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-textSecondary">NO₂</span>
          <span>
            {data.hourly.nitrogen_dioxide?.[0] != null ? (
              `${data.hourly.nitrogen_dioxide[0]} µg/m³`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-textSecondary">SO₂</span>
          <span>
            {data.hourly.sulphur_dioxide?.[0] != null ? (
              `${data.hourly.sulphur_dioxide[0]} µg/m³`
            ) : (
              <span className="text-gray-500 italic">N/A</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
