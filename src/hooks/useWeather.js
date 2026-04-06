import { useEffect, useState } from "react";
import { fetchWeather } from "../services/weatherApi";

const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetchWeather(latitude, longitude);

          setData(res);
        } catch (err) {
          setError("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLocationError("Location access denied");
        setLoading(false);
      }
    );
  }, []);

  return { data, loading, error, locationError };
};

export default useWeather;