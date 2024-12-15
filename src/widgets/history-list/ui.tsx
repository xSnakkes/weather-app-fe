import React from "react";
import { Weather } from "entity/weather";
import styles from "./styles.module.scss";
import "shared/lib/toCapitalize";
import classNames from "classnames";
import { WeatherImg } from "shared/ui/weather-img";
import { Text } from "shared/ui";
import { motion } from "framer-motion";

interface IHistoryListProps {
  items: Weather[];
  className?: string;
}

export const HistoryList: React.FC<IHistoryListProps> = ({
  items,
  className,
}) => {
  return (
    <div className={classNames(className, styles.container)}>
      {items.map((item, index) => (
        <motion.div
          key={item._id}
          className={styles.item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className={styles.item__header}>
            <Text variant="bold" className={styles.item__city}>
              {item.city}
            </Text>
            <div className={styles.item__description}>
              {item.description.toCapitalize()}
            </div>
          </div>
          <div className={styles.item__content}>
            <Text variant="bold" className={styles.item__temp}>
              {Math.floor(item.temperature)}°
            </Text>
            <WeatherImg size="small" weatherType={item.description} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
