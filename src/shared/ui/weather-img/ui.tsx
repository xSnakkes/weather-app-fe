import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import clear from "shared/assets/img/weather/clear.png";
import clouds from "shared/assets/img/weather/clouds.png";
import snow from "shared/assets/img/weather/snow.png";
import rain from "shared/assets/img/weather/rain.png";
import thunderstorm from "shared/assets/img/weather/thunderstorm.png";
import { WeatherType } from "entity/weather";

export const weatherMap = {
  clouds,
  thunderstorm,
  clear,
  snow,
  drizzle: rain,
  rain,
  atmosphere: clouds,
};

interface IWeatherImgProps {
  weatherType: WeatherType;
  size: "small" | "large" | "medium";
}

export const WeatherImg: React.FC<IWeatherImgProps> = ({
  weatherType,
  size,
}) => {
  return (
    <img
      src={weatherMap[weatherType]}
      alt="weather"
      className={classNames(styles.weatherImg, styles[size])}
    />
  );
};
