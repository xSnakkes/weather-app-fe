import React from "react";
import { Text } from "shared/ui/text";
import styles from "./styles.module.scss";
import { Button, Link } from "shared/ui";
import { Input } from "shared/ui/input";
import { useState } from "react";
import { useWeatherStore } from "entity/weather";
import { useHistoryStore } from "entity/history";
import { WeatherService } from "shared/api/weather/Weather.class";
import { motion } from "framer-motion";
import { usePageWidth } from "shared/hooks/usePageWidth";

export const FormCity: React.FC = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { setWeather, setIsImgHidden } = useWeatherStore();
  const { addToHistory } = useHistoryStore();
  const width = usePageWidth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const weather = await WeatherService.getWeather(city);
      setWeather(weather);
      addToHistory(weather);
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.wrapper}>
        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Input
            value={city}
            onChange={(value) => {
              setCity(value);
              setError(null);
            }}
            placeholder="Start entering the name of the city"
            label="Enter the city"
            error={error}
            onFocus={() => {
              if (width < 768) {
                setIsImgHidden(true);
              }
            }}
            onBlur={() => {
              setIsImgHidden(false);
            }}
          />
          <Button type="submit">Submit</Button>
        </motion.form>
        <Link to="/history" className={styles.link}>
          Show history
        </Link>
      </div>
    </motion.div>
  );
};
