import axios from "axios";

const HISTORICAL_URL = "https://archive-api.open-meteo.com/v1/archive";

export const fetchHistoryWeather = async (
  startDate,
  endDate,
  latitude,
  longitude,
) => {
  const formatDate = (date) => date.toISOString().split("T")[0];

  const response = await axios.get(HISTORICAL_URL, {
    params: {
      latitude: latitude,
      longitude: longitude,
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),

      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "sunrise",
        "sunset",
        "precipitation_sum",
        "windspeed_10m_max",
        "winddirection_10m_dominant",
      ].join(","),

      timezone: "auto",
    },
  });
  return response.data.daily;
};
