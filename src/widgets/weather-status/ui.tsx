import { Text } from "shared/ui/text";
import styles from "./styles.module.scss";
import { WeatherImg } from "shared/ui/weather-img";
import { Title } from "shared/ui";
import { useWeatherStore } from "entity/weather";
import "shared/lib/toCapitalize";
import { usePageWidth } from "shared/hooks/usePageWidth";

interface IWheatherStatusProps {
  isLoading: boolean;
}

export const WeatherStatus: React.FC<IWheatherStatusProps> = ({
  isLoading,
}) => {
  const width = usePageWidth();
  const { weather, isImgHidden } = useWeatherStore();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Text>Loading...</Text>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {weather ? (
        <>
          {!isImgHidden && (
            <WeatherImg
              weatherType={weather.description}
              size={width > 768 ? "large" : "medium"}
            />
          )}
          <div className={styles.description}>
            <Title variant="h2" className={styles.title}>
              {weather.city}
            </Title>
            <div className={styles.weather}>
              <Title variant="h1">{Math.floor(weather.temperature)}°</Title>
              <Text className={styles.weather}>
                {weather.description.toCapitalize()}
              </Text>
            </div>
          </div>
        </>
      ) : (
        <Text>Please enter the city in the form above to see the weather</Text>
      )}
    </div>
  );
};
