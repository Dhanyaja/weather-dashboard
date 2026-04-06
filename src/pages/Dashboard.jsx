import { useState } from "react";
import AirQualityCard from "../components/cards/AirQualityCard";
import AtmosphereCard from "../components/cards/AtmosphereCard";
import SunCycleCard from "../components/cards/SunCycleCard";
import TemperatureCard from "../components/cards/TemperatureCard";
import WindCard from "../components/cards/WindCard";
import LineChartCard from "../components/charts/LineChartCard";
import PMChart from "../components/charts/PMChart";
import TemperatureChart from "../components/charts/TemperatureChart";
import Navbar from "../components/common/Navbar";
import useWeather from "../hooks/useWeather";
import { transformWeatherData } from "../utils/transformWeather";

const Dashboard = () => {
  const [unit, setUnit] = useState("C");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data, loading, error, locationError } = useWeather();

  console.log("Raw Weather Data:", data);

  const transformed = transformWeatherData(data);

  const selectedDateStr = selectedDate.toISOString().split("T")[0];

  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  const availableDates =
    transformed?.hourly?.time?.map((t) => t.split("T")[0]) || [];

  const minDate = availableDates[0] ? new Date(availableDates[0]) : new Date();

  const maxDate = availableDates[availableDates.length - 1]
    ? new Date(availableDates[availableDates.length - 1])
    : new Date();

  const chartData = transformed?.hourly?.time
    ? transformed.hourly.time
        .map((time, index) => {
          const dateStr = new Date(time).toISOString().split("T")[0];

          if (dateStr !== selectedDateStr) return null;

          return {
            time: new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            temp: transformed.hourly.temperature[index],
            humidity: transformed.hourly.humidity[index],
            precipitation: transformed.hourly.precipitation[index],
            wind: transformed.hourly.wind[index],
            visibility: (transformed.hourly.visibility[index] / 1000).toFixed(
              1,
            ),
            pm10: transformed.hourly.pm10?.[index],
            pm25: transformed.hourly.pm2_5?.[index],
          };
        })
        .filter(Boolean)
    : [];

  const temps = chartData.map((d) => d.temp);

  const selectedDayData = temps.length
    ? { tempMin: Math.min(...temps), tempMax: Math.max(...temps) }
    : null;

  return (
    <div>
      <Navbar
        unit={unit}
        toggleUnit={toggleUnit}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        minDate={minDate}
        maxDate={maxDate}
      />

      <div className="p-6">
        {locationError && (
          <div className="text-danger mb-4">⚠ {locationError}</div>
        )}
        {loading && <div>Loading weather data...</div>}
        {error && <div className="text-danger">{error}</div>}
        {data && transformed && (
          <div>
            <h1 className="text-xl mb-4">Weather Data</h1>
            {transformed && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <TemperatureCard
                  data={transformed}
                  unit={unit}
                  selectedDay={selectedDayData}
                  selectedDate={selectedDate}
                />
                <AtmosphereCard data={transformed} />
                <SunCycleCard data={transformed} />
                <WindCard data={transformed} />
                <AirQualityCard data={transformed} />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-2 p-6">
        <h2 className="text-lg font-semibold mb-6">Weather Trends</h2>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>

        {chartData && (
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="flex gap-4 min-w-[1400px]">
              <LineChartCard
                title={`Temperature (°${unit})`}
                data={chartData}
                dataKey="temp"
                color="#3b82f6"
              />

              <LineChartCard
                title="Humidity (%)"
                data={chartData}
                dataKey="humidity"
                color="#22c55e"
              />

              <LineChartCard
                title="Precipitation (mm)"
                data={chartData}
                dataKey="precipitation"
                color="#facc15"
              />

              <LineChartCard
                title="Visibility (km)"
                data={chartData}
                dataKey="visibility"
                color="#84cc16"
              />

              <LineChartCard
                title="Wind Speed (km/h)"
                data={chartData}
                dataKey="wind"
                color="#60a5fa"
              />

              <PMChart data={chartData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
