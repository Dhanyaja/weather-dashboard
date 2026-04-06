import React, { useEffect, useState } from "react";
import { fetchHistoryWeather } from "../services/historicalWeather";

const useHistoricalWeather = (startDate, endDate) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      setLoading(false);
      return;
    }
    const diffInDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (diffInDays > 730) {
      setError("Please select a date range of up to 2 years (730 days).");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);
          setError(null);
          const { latitude, longitude } = position.coords;
          const result = await fetchHistoryWeather(
            startDate,
            endDate,
            latitude,
            longitude,
          );
          setData(result);
        } catch (error) {
          setError("Failed to fetch historical weather data.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLocationError("Location access denied");
        setLoading(false);
      },
    );
  }, [startDate, endDate]);

  return { data, loading, error, locationError };
};

export default useHistoricalWeather;
