import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import DatePicker from "react-datepicker";
import useHistoricalWeather from "../hooks/useHistoricalWeather";
import TemperatureHistoryChart from "../components/charts/TemperatureHistoryChart";
import PrecipitationChart from "../components/charts/PrecipitationChart";
import SunCycleCard from "../components/cards/HistorySunCycleCard";

const Historical = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() - 1)),
  );
  const [endDate, setEndDate] = useState(new Date());
  const diffInDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  const isInvalidRange = diffInDays > 730;

  const { data, loading, error, locationError } = useHistoricalWeather(
    isInvalidRange ? null : startDate,
    isInvalidRange ? null : endDate,
  );

  const formatTime = (iso) => {
    const date = new Date(iso);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const chartData = data
    ? data.time.map((date, index) => ({
        date,
        max: data.temperature_2m_max[index],
        min: data.temperature_2m_min[index],
        mean:
          (data.temperature_2m_max[index] + data.temperature_2m_min[index]) / 2,
        precipitation: data.precipitation_sum[index],
        wind: data.windspeed_10m_max[index],
        windDirection: data.winddirection_10m_dominant[index],
        sunrise: data.sunrise[index],
        sunset: data.sunset[index],
      }))
    : [];

  const totalRain = chartData.reduce((sum, d) => sum + d.precipitation, 0);

  const maxWind = Math.max(...chartData.map((d) => d.wind));

  const getDirection = (deg) => {
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return dirs[Math.round(deg / 45) % 8];
  };

  return (
    <div>
      <Navbar showControls={false} />
      {error && <div className="text-danger">{error}</div>}
      {locationError && <div className="text-danger">{locationError}</div>}
      {isInvalidRange && (
        <div className="text-danger mb-4">Max range is 2 years (730 days)</div>
      )}
      {loading && (
        <div className="text-center py-10 text-textSecondary">
          Fetching historical insights...
        </div>
      )}

      {!loading && chartData.length === 0 && (
        <div className="text-center py-10 text-textSecondary">
          No data available for selected range
        </div>
      )}
      <div className="p-6">
        <h1 className="text-xl mb-4">Historical Weather Analysis</h1>

        <div className="flex gap-4 items-center mb-6">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="bg-card border border-border p-2 rounded"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="bg-card border border-border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="card hover:scale-[1.02] transition-all flex flex-col justify-between">
            <div>
              <div className="text-sm text-textSecondary">🌧 Total Rainfall</div>
              <div className="text-2xl font-bold mt-1">
                {totalRain.toFixed(1)} mm
              </div>
            </div>
            <div className="text-xs text-textSecondary mt-2">
              Accumulated precipitation
            </div>
          </div>

          <div className="card hover:scale-[1.02] transition-all flex flex-col justify-between">
            <div>
              <div className="text-sm text-textSecondary">💨 Max Wind Speed</div>
              <div className="text-2xl font-bold mt-1">{maxWind} km/h</div>
            </div>
            <div className="text-xs text-textSecondary mt-2">
              Peak wind recorded
            </div>
          </div>

          <div className="card hover:scale-[1.02] transition-all flex flex-col justify-between">
            <div className="text-sm text-textSecondary mb-1">
              🌅 Sun Cycle (IST)
            </div>

            <div className="flex justify-between items-center mt-2">
              <div>
                <div className="text-xs text-textSecondary">Sunrise</div>
                <div className="font-semibold">
                  {formatTime(chartData[0]?.sunrise)}
                </div>
              </div>

              <div>
                <div className="text-xs text-textSecondary">Sunset</div>
                <div className="font-semibold">
                  {formatTime(chartData[0]?.sunset)}
                </div>
              </div>
            </div>
          </div>

          <div className="card hover:scale-[1.02] transition-all flex flex-col justify-between">
            <div>
              <div className="text-sm text-textSecondary">🧭 Wind Direction</div>
              <div className="text-2xl font-bold mt-1">
                {getDirection(chartData[0]?.windDirection)}
              </div>
            </div>
            <div className="text-xs text-textSecondary mt-2">
              Dominant direction
            </div>
          </div>
        </div>
        {chartData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TemperatureHistoryChart data={chartData} />
            <PrecipitationChart data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Historical;
