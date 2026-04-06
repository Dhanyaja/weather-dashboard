import axios from "axios";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const AIR_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";

export const fetchWeather = async (lat, lon) => {
  try {
    const [weatherRes, airRes] = await Promise.all([
      axios.get(WEATHER_URL, {
        params: {
          latitude: lat,
          longitude: lon,
          current_weather: true,

          hourly: [
            "temperature_2m",
            "relativehumidity_2m",
            "precipitation",
            "visibility",
            "windspeed_10m",
          ].join(","),

          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "sunrise",
            "sunset",
            "precipitation_probability_max",
            "windspeed_10m_max",
          ].join(","),

          timezone: "auto",
        },
      }),

      axios.get(AIR_URL, {
        params: {
          latitude: lat,
          longitude: lon,
          hourly: [
            "pm10",
            "pm2_5",
            "carbon_monoxide",
            "carbon_dioxide",
            "nitrogen_dioxide",
            "sulphur_dioxide",
            "uv_index",
          ].join(","),
          timezone: "auto",
        },
      }),
    ]);

    const weatherData = weatherRes.data;
    const airData = airRes.data;

    return {
      ...weatherData,
      hourly: {
        ...weatherData.hourly,
        pm10: airData.hourly.pm10,
        pm2_5: airData.hourly.pm2_5,
        carbon_monoxide: airData.hourly.carbon_monoxide,
        carbon_dioxide: airData.hourly.carbon_dioxide,
        nitrogen_dioxide: airData.hourly.nitrogen_dioxide,
        sulphur_dioxide: airData.hourly.sulphur_dioxide,
        uv_index: airData.hourly.uv_index,
      },
    };
  } catch (error) {
    throw error;
  }
};
