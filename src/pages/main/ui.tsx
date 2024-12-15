import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { WeatherStatus } from "widgets/weather-status";
import { FormCity } from "widgets/form-city";
import { WeatherService } from "shared/api/weather/Weather.class";
import { useWeatherStore } from "entity/weather";

export const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { setWeather } = useWeatherStore();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      setLoading(true);
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

      const formatedTimeZone = timeZone.split("/")[1];

      try {
        const weather = await WeatherService.getWeather(formatedTimeZone);
        setWeather(weather);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentWeather();
  }, []);

  return (
    <div className={styles.container}>
      <WeatherStatus isLoading={loading} />
      <FormCity />
    </div>
  );
};
