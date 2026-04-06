export const transformWeatherData = (data) => {
  if (!data) return null;

  return {
    current: {
      temperature: data.current_weather.temperature,
      windSpeed: data.current_weather.windspeed,
    },

    temperature: {
      min: data.daily.temperature_2m_min[0],
      max: data.daily.temperature_2m_max[0],
    },

    sun: {
      sunrise: data.daily.sunrise[0],
      sunset: data.daily.sunset[0],
    },

    daily: {
      precipitationProbability: data.daily.precipitation_probability_max[0],
      windSpeedMax: data.daily.windspeed_10m_max[0],
    },

    hourly: {
      time: data.hourly.time,
      temperature: data.hourly.temperature_2m,
      humidity: data.hourly.relativehumidity_2m,
      precipitation: data.hourly.precipitation,
      wind: data.hourly.windspeed_10m,
      visibility: data.hourly.visibility,
      pm10: data.hourly.pm10,
      pm2_5: data.hourly.pm2_5,
      cardon_dioxide: data.hourly.carbon_dioxide,
      carbon_monoxide: data.hourly.carbon_monoxide,
      nitrogen_dioxide: data.hourly.nitrogen_dioxide,
      sulphur_dioxide: data.hourly.sulphur_dioxide,
      uv_index: data.hourly.uv_index,
    },
  };
};
